const db = require("../config/database");

exports.createMovie = async (req, res) => {
  const { movieID, movieName, published } = req.body;
  const { rows } = await db.query(
    "INSERT INTO movies (movieID, movieName, published) VALUES ($1, $2, $3)",
    [movieID, movieName, published]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { movieID, movieName, published }
    },
  });
};

exports.listAllMovies = async (req, res) => {
    const response = await db.query('SELECT * FROM movies');
    res.status(200).send(response.rows);
  };

exports.findMovieById = async (req, res) => {
    const movieId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM movies WHERE movieId = $1', [movieId]);
    res.status(200).send(response.rows);
  }

exports.updateMovieById = async (req, res) => {
    const movieId = parseInt(req.params.id);
    const { movieName, published } = req.body;
  
    const response = await db.query(
      "UPDATE movies SET movieName = $1, published = $2 WHERE movieId = $3",
      [movieName, published, movieId]
    );
  
    res.status(200).send({ message: "Movie Updated Successfully!" });
  };  

exports.deleteMovieById = async (req, res) => {
    const movieId = parseInt(req.params.id);
    await db.query('DELETE FROM movies WHERE movieId = $1', [
      movieId
    ]);
  
    res.status(200).send({ message: 'Movie deleted successfully!', movieId });
  };


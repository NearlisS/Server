const db = require("../config/database");

exports.createGenre = async (req, res) => {
  const { genreId, genreName } = req.body;
  const { rows } = await db.query(
    "INSERT INTO genres (genreId, genreName) VALUES ($1, $2)",
    [genreId, genreName]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { genreId, genreName }
    },
  });
};

exports.listAllGenres = async (req, res) => {
    const response = await db.query('SELECT * FROM genres');
    res.status(200).send(response.rows);
  };

exports.findGenreById = async (req, res) => {
    const genreId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM genres WHERE genreId = $1', [genreId]);
    res.status(200).send(response.rows);
  }

exports.updateGenreById = async (req, res) => {
    const genreId = parseInt(req.params.id);
    const { genreName } = req.body;
  
    const response = await db.query(
      "UPDATE genres SET genreName = $1, published = $2 WHERE genreId = $3",
      [genreName, genreId]
    );
  
    res.status(200).send({ message: "Genre Updated Successfully!" });
  };  

exports.deleteGenreById = async (req, res) => {
    const genreId = parseInt(req.params.id);
    await db.query('DELETE FROM genres WHERE genreId = $1', [
      genreId
    ]);
  
    res.status(200).send({ message: 'Genre deleted successfully!', genreId });
  };
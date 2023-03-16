 Database: movies

-- DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies
    WITH
   OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE movies (
	movieId SERIAL PRIMARY KEY,
	movieName VARCHAR(255) NOT NULL,
	published DATE NOT NULL
);

CREATE TABLE genres (
	genreId SERIAL PRIMARY KEY,
	genreName VARCHAR(255) NOT NULL
);

CREATE TABLE movies_genres (
  movie_id INTEGER REFERENCES movies(movieId),
  genre_id INTEGER REFERENCES genres(genreId),
  PRIMARY KEY (movie_id, genre_id)
);
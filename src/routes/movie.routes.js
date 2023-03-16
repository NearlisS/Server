const router = require('express-promise-router')();
const movieController = require('../controllers/movie.controller');

router.post('/movies', movieController.createMovie);
router.get('/movies', movieController.listAllMovies);
router.get('/movies/:id', movieController.findMovieById);
router.put('/movies/:id', movieController.updateMovieById);
router.delete('/movies/:id', movieController.deleteMovieById);

module.exports = router;

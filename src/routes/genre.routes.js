const router = require('express-promise-router')();
const genreController = require('../controllers/genre.controller');

router.post('/genres', genreController.createGenre);
router.get('/genres', genreController.listAllGenres);
router.get('/genres/:id', genreController.findGenreById);
router.put('/genres/:id', genreController.updateGenreById);
router.delete('/genres/:id', genreController.deleteGenreById);

module.exports = router;

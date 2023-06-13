const express = require('express');
const router = express.Router();
const movies = require('../../services/users/movies');

/* GET movies */
router.get('/', async function(req, res, next) {
    return new Promise(function() {
        movies.getByUserID(req.query.userID)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* POST movies */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        movies.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PUT movies */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        movies.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* DELETE movies */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        movies.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
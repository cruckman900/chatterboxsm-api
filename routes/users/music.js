const express = require('express');
const router = express.Router();
const music = require('../../services/users/music');

/* GET music */
router.get('/', async function(req, res, next) {
    return new Promise(function() {
        music.getByUserID(req.query.userID)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* POST music */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        music.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PUT music */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        music.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* DELETE music */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        music.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
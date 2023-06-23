const express = require('express');
const router = express.Router();
const foods = require('../../services/users/foods');

/* GET foods */
router.get('/', async function(req, res, next) {
    return new Promise(function() {
        foods.getByUserID(req.query.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* POST foods */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        foods.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PUT foods */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        foods.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* DELETE foods */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        foods.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
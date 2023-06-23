const express = require('express');
const router = express.Router();
const locations = require('../../services/users/locations');

/* GET locations */
router.get('/', async function(req, res, next) {
    return new Promise(function() {
        locations.getByUserID(req.query.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* POST locations */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        locations.create(req.body)
            .then(result => res.json(result))
            .catch(err => rejects(err));
    });
});

/* PUT locations */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        locations.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* DELETE locations */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        locations.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
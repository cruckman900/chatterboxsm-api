const express = require('express');
const router = express.Router();
const activities = require('../../services/users/activities');

/* GET activities */
router.get('/', async function(req, res, next) {
    return new Promise(function() {
        activities.getByUserID(req.query.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* POST activities */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        activities.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PUT activities */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        activities.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* DELETE activities */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        activities.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
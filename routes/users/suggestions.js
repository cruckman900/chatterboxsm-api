const express = require('express');
const router = express.Router();
const suggestions = require('../../services.users/suggestions');

/* GET suggestions */
router.get('/', async function(req, res, next) {
    return new Promise(function() {
        suggestions.getByUserID(req.query.userID)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* POST suggestions */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        suggestions.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PUT suggestions */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        suggestions.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* DELETE suggestions */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        suggestions.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
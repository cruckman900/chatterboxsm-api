const express = require('express');
const router = express.Router();
const technical = require('../../services/users/technical');

/* GET technical */
router.get('/', async function(req, res, next) {
    return new Promise(function() {
        technical.getByUserID(req.query.userID)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* POST technical */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        technical.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PUT technical */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        technical.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* DELETE technical */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        technical.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
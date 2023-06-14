const express = require('express');
const router = express.Router();
const groups = require('../../services/groups/groups');

/* GET groups */
router.get('/', async function(req, res, next) {
    if(req.query.action === 'getAll') {
        return new Promise(function() {
            groups.getAll()
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    } else if (req.query.action === 'getGroupByID') {
        return new Promise(function() {
            groups.getByID(req.query.id)
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    }
});

/* POST groups */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        groups.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PUT groups */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        groups.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* DELETE groups */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        groups.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const systemsettings = require('../../services/users/systemsettings');

/* GET systemsettings */
router.get('/', async function(req, res, next) {
    return new Promise(function() {
        systemsettings.getByUserID(req.query.id)
            .then(result => res.json(result))
            .catch(err => rejects(err));
    });
});

/* POST systemsettings */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        systemsettings.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PUT systemsettings */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        systemsettings.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* DELETE systemsettings */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        systemsettings.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
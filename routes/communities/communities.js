const express = require('express');
const router = express.Router();
const communities = require('../../services/communities/communities');

/* GET communities */
router.get('/', async function(req, res, next) {
    if (req.query.action === "getAllCommunities") {
        return new Promise(function() {
            communities.getAll()
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    } else if (req.query.action === "getCommunityByID") {
        return new Promise(function() {
            communities.getByID(id)
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    }
});

/* POST communities */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        communities.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PUT communities */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        communities.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* DELETE communities */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        communities.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
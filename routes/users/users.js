const express = require('express');
const router = express.Router();
const users = require('../../services/users/users');

/* GET user */
router.get('/', async function(req, res, next) {
    if (req.query.action === "getUserByID") {
        return new Promise(function() {
            users.getByID(req.query.id)
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    } else if (req.query.action === "getUserByUsernameAndPassword") {
        return new Promise(function() {
            users.getByUsernameAndPassword(req.query.username, req.query.password)
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    } else if (req.query.action === "getUserByEmailAndUsername") {
        return new Promise(function() {
            users.getByEmailAndUsername(req.query.email, req.query.username)
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    } else if (req.query.action === 'getCountUsers') {
        return new Promise(function() {
            users.getUserCount()
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    } else if (req.query.action === 'getCountUsersOnline') {
        return new Promise(function() {
            users.getUserCountIsLoggedIn()
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    } else {
        return new Promise(function() {
            users.getAll()
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    }
});

/* POST user */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        users.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PUT user */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        users.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PATCH user */
router.patch('/', async function(req, res, next) {
    return new Promise(function() {
        users.updatePassword(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
})

/* DELETE user */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        users.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
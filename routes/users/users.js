const express = require('express');
const router = express.Router();
const users = require('../../services/users/users');

/* GET user */
router.get('/', async function(req, res, next) {
    try {
        if (req.query.action === "getUserByID") {
            return new Promise(function() {
                users.getByID(req.query.id)
                    .then(result => res.json(result))
                    .catch(err => res.json(err));
            })
        } else if (req.query.action === "getUserByUsernameAndPassword") {
            return new Promise(function() {
                users.getByUsernameAndPassword(req.query.username, req.query.password)
                    .then(result => res.json(result))
                    .catch(err => res.json(err));
            })
        } else if (req.query.action === 'getCountUsers') {
            return new Promise(function() {
                users.getUserCount()
                    .then(result => res.json(result))
                    .catch(err => res.json(err));
            })
        } else if (req.query.action === 'getCountUsersOnline') {
            return new Promise(function() {
                users.getUserCountIsLoggedIn()
                    .then(result => res.json(result))
                    .catch(err => res.json(err));
            })
        } else {
            return new Promise(function() {
                users.getAll()
                    .then(result => res.json(result))
                    .catch(err => res.json(err));
            })
        }
    } catch (err) {
        console.log(`Error while getting user(s) `, err.message);
        next(err);
    }
});

/* POST users */
router.post('/', async function(req, res, next) {
    try {
        console.log('POST user req.body', req.body);
        const result = await users.create(req.body);
        res.json(result);
    } catch (err) {
        console.error(`Error while creating users `, err.message);
        next(err);
    }
});

/* PUT user */
router.put('/', async function(req, res, next) {
    try {
        console.log('PUT user req.body', req.body);
        const result = await users.update(req.body);
        res.json(result);
    } catch (err) {
        console.log(`Error while updating users `, err.message);
        next(err);
    }
});

/* DELETE user */
router.delete('/:id', async function(req, res, next) {
    try {
        const result = await users.remove(req.params.id);
        res.json(result);
    } catch (err) {
        console.error(`Error while deleting user `, err.message)
        next(err);
    }
});

module.exports = router;
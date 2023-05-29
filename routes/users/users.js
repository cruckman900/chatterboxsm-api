const express = require('express');
const router = express.Router();
const users = require('../../services/users/users');

/* GET users */
router.get('/', async function(req, res, next) {
    try {
        res.json(await users.getMultiple(req.query.page));
    } catch (err) {
        console.log(`Error while getting users `, err.message);
        next(err);
    }
});

/* POST users */
router.post('/', async function(req, res, next) {
    try {
        console.log(req.body);
        res.json(await users.create(req.body));
    } catch (err) {
        console.error(`Error while creating users`, err.message);
        next(err);
    }
});

/* PUT user */
router.put('/:id', async function(req, res, next) {
    try {
        res.json(await users.update(req.params.id, req.body));
    } catch (err) {
        console.log(`Error while updating users `, err.message);
        next(err);
    }
});

/* DELETE user */
router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await users.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting user `, err.message)
        next(err);
    }
});

module.exports = router;
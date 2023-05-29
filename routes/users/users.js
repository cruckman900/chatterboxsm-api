const express = require('express');
const router = express.Router();
const users = require('../../services/users/users');

/* GET user */
router.get('/', async function(req, res, next) {
    console.log(req.query);
    try {
        if (req.query.id) {
            res.json(await users.getByID(req.query.id));
        } else if (req.query.username && req.query.password) {
            res.json(await users.getByUsernameAndPassword(req.query.username, req.query.password));
        } else {
            res.json(await users.getMultiple(req.query.page));
        }
    } catch (err) {
        console.log(`Error while getting user `, err.message);
        next(err);
    }
});

// router.get('/:username&:password', async function(req, res, next) {
//     try {
//         res.json(await users.getByUsernameAndPassword(req.params.username, req.params.password));
//     } catch (err) {
//         console.log(`Error while getting user `, err.message);
//         next(err);
//     }
// });

/* GET users */
// router.get('/', async function(req, res, next) {
//     try {
//         res.json(await users.getMultiple(req.query.page));
//     } catch (err) {
//         console.log(`Error while getting users `, err.message);
//         next(err);
//     }
// });

/* POST users */
router.post('/', async function(req, res, next) {
    try {
        console.log(req.body);
        res.json(await users.create(req.body));
    } catch (err) {
        console.error(`Error while creating users `, err.message);
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
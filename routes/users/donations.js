const express = require('express');
const router = express.Router();
const donations = require('../../services/users/donations');

/* GET donations */
router.get('/', async function(req, res, next) {
    if (req.query.action === 'getAllDonations') {
        return new Promise(function() {
            donations.getAll()
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    } else if (req.query.action === 'getDonationsByUser') {
        return new Promise(function () {
            donations.getByUserID(req.query.userID)
                .then(result => res.json(result))
                .catch(err => res.json(err));
        });
    }
});

/* POST donations */
router.post('/', async function(req, res, next) {
    return new Promise(function() {
        donations.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* PUT donations */
router.put('/', async function(req, res, next) {
    return new Promise(function() {
        donations.update(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

/* DELETE donations */
router.delete('/:id', async function(req, res, next) {
    return new Promise(function() {
        donations.remove(req.param.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });
});

module.exports = router;
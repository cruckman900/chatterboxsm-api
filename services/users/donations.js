const db = require('../db');

const select = `SELECT id, userid, purpose, amount, donation_date`;

async function getAll() {
    return new Promise(function(resolve, reject) {
        db.query(select)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function getByUserID(id) {
    const sql = `${select} WHERE userid=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function create(donations) {
    var sql = `INSERT INTO ${process.env.dbdatabase}.donations 
        (userid, purpose, amount, donation_date) 
        VALUES 
        (${donations.data.userid}, "${donations.data.purpose}", ${donations.data.amount}, 
        ${donations.data.donation_date});`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(donations) {
    var sql = `UPDATE ${process.env.dbdatabase}.donations 
        SET userid=${donations.data.userid}, purpose="${donations.data.purpose}", 
        amount=${donations.data.amount}, donation_date=${donations.data.donation_date} 
        WHERE userid=${donations.data.donation_date};`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    })
}

async function remove(id) {
    const sql = `DELETE FROM ${process.env.dbdatabase}.donations WHERE userid=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

module.exports = {
    getAll,
    getByUserID,
    create,
    update,
    remove
}
const db = require('../db');

const select = `SELECT id, userid, purpose, amount, donation_date 
    FROM ${process.env.dbdatabase}.donations `;

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
    const sql = `INSERT INTO ${process.env.dbdatabase}.donations 
        (userid, purpose, amount, donation_date) 
        VALUES 
        (${donations.userid}, "${donations.purpose}", ${donations.amount}, 
        ${donations.donation_date});`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(donations) {
    const sql = `UPDATE ${process.env.dbdatabase}.donations 
        SET userid=${donations.userid}, purpose="${donations.purpose}", 
        amount=${donations.amount}, donation_date=${donations.donation_date} 
        WHERE userid=${donations.donation_date};`;
    
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
const db = require('../db');

const select = `SELECT id, userid, city, state, country 
    FROM ${process.env.dbdatabase}.locations `;

async function getByUserID(id) {
    const sql = `${select} WHERE userid=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function create(locations) {
    const sql = `INSERT INTO ${process.env.dbdatabase}.locations 
        (userid, city, state, country)
        VALUES 
        (${locations.userid}, "${locations.city}", "${locations.state}", 
        "${locations.country}");`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(locations) {
    const sql = `UPDATE ${process.env.dbdatabase}.locations 
    SET userid=${locations.userid}, city="${locations.city}", 
    state="${locations.state}", country="${locations.country}" 
    WHERE userid=${locations.userid};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function remove(id) {
    const sql = `DELETE FROM ${process.env.dbdatabase}.locations WHERE userid=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

module.exports = {
    getByUserID,
    create,
    update,
    remove
}
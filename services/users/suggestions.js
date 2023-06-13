const db = require('../db');

const select = `SELECT id, userid, title, description, votes, created_date `;

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

async function create(suggestions) {
    var sql = `INSERT INTO ${process.env.dbdatabase}.suggestions 
        (userid, title, description, votes, created_date) 
        VALUES 
        (${suggestions.data.userid}, "${suggestions.data.title}", "${suggestions.data.description}", 
        ${suggestions.data.votes}, ${suggestions.data.created_date});`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(suggestions) {
    var sql = `UPDATE ${process.env.dbdatabase}.suggestions 
        SET userid=${suggestions.data.userid}, title="${suggestions.data.title}", 
        description="${suggestions.data.description}", votes=${suggestions.data.votes}, 
        created_date="${suggestions.data.created_date}";`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function remove(id) {
    const sql = `DELETE FROM ${process.env.dbdatabase}.suggestions WHERE userid=${id};`;

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
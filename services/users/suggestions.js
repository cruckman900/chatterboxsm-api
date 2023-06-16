const db = require('../db');

const select = `SELECT id, userid, title, description, votes, complete, rejected, created_date 
    FROM ${process.env.dbdatabase}.suggestions `;

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
    const sql = `INSERT INTO ${process.env.dbdatabase}.suggestions 
        (userid, title, description, votes, complete, rejected, created_date) 
        VALUES 
        (${suggestions.userid}, "${suggestions.title}", "${suggestions.description}", 
        ${suggestions.complete}, ${suggestions.rejected}, ${suggestions.votes}, ${suggestions.created_date});`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(suggestions) {
    const sql = `UPDATE ${process.env.dbdatabase}.suggestions 
        SET userid=${suggestions.userid}, title="${suggestions.title}", 
        description="${suggestions.description}", complete=${suggestions.complete}, 
        rejected=${suggestions.rejected}, votes=${suggestions.votes}, 
        created_date="${suggestions.created_date}";`;
    
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
    getAll,
    getByUserID,
    create,
    update,
    remove
}
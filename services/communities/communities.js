const db = require('../db');

const select = `SELECT id, communityname, creator, category, description, 
    icon, timestamp 
    FROM ${process.env.dbdatabase}.communities `;

async function getAll() {
    return new Promise(function(resolve, reject) {
        db.query(select)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function getByID(id) {
    const sql = `${select} WHERE id=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function create(communities) {
    const sql = `INSERT INTO ${process.env.dbdatabase}.communities 
        (communityname, creator, category, description, icon, timestamp) 
        VALUES 
        ("${communities.communityname}", ${communities.creator}, 
        ${communities.category}, "${communities.description}", 
        "${communities.icon}", "${communities.timestamp}");`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(communities) {
    const sql = `UPDATE ${process.env.dbdatabase}.communities 
        SET communityname="${communities.communityname}", 
        creator=${communities.creator}, category=${communities.category}, 
        description="${communities.description}", icon="${communities.icon}", 
        timestamp="${communities.timestamp}" 
        WHERE id=${communities.id};`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function remove(id) {
    const sql = `DELETE FROM ${process.env.dbdatabase}.communities WHERE id=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

module.exports = {
    getAll,
    getByID,
    create,
    update,
    remove
}
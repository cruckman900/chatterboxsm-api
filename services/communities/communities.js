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
        ("${communities.data.communityname}", ${communities.data.creator}, 
        ${communities.data.category}, "${communities.data.description}", 
        "${communities.data.icon}", "${communities.data.timestamp}");`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(communities) {
    const sql = `UPDATE ${process.env.dbdatabase}.communities 
        SET communityname="${communities.data.communityname}", 
        creator=${communities.data.creator}, category=${communities.data.category}, 
        description="${communities.data.description}", icon="${communities.data.icon}", 
        timestamp="${communities.data.timestamp}" 
        WHERE id=${communities.data.id};`;
    
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
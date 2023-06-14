const db = require('../db');

const select = `SELECT id, groupname, creator, icon, created_date FROM ${process.env.dbdatabase}.dgroups `;

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

async function create(groups) {
    const sql = `INSERT INTO ${process.env.dbdatabase}.groups 
        (groupname, creator, icon, created_date) 
        VALUES 
        ("${groups.data.groupname}", ${groups.data.creator}, "${groups.data.icon}", 
        "${groups.data.created_date}");`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(groups) {
    const sql = `UPDATE ${process.env.dbdatabase}.groups 
        SET groupname="${groups.data.groupname}", creator=${groups.data.creator}, 
        icon="${groups.data.icon}", created_date="${groups.data.created_date}" 
        WHERE id=${groups.data.id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function remove(id) {
    const sql = `DELETE FROM ${process.env.dbdatabase}.groups WHERE id=${id};`;

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
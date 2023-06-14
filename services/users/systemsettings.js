const db = require('../db');

const select = `SELECT id, userid, avatar, blurb, primarycolor, secondarycolor `;

async function getByUserID(id) {
    const sql = `${select} WHERE userid=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function create(systemsettings) {
    const sql = `INSERT INTO ${process.env.dbdatabase}.systemsettings 
        (userid, avatar, blurb, primarycolor, secondarycolor) 
        VALUES 
        (${systemsettings.data.userid}, "${systemsettings.data.avatar}", 
        "${systemsettings.data.blurb}", "${systemsettings.data.primarycolor}", 
        "${systemsettings.data.secondarycolor}");`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(systemsettings) {
    const sql = `UPDATE ${process.env.dbdatabase}.systemsettings 
        SET userid=${systemsettings.data.userid}, avatar="${systemsettings.data.avatar}", 
        blurb="${systemsettings.data.blurb}", primarycolor="${systemsettings.data.primarycolor}", 
        secondarycolor="${systemsettings.data.secondarycolor}";`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function remove(id) {
    const sql = `DELETE FROM ${process.env.dbdatabase}.systemsettings WHERE userid=${id};`;

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
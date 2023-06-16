const db = require('../db');

const select = `SELECT id, userid, avatar, blurb, primarycolor, secondarycolor 
    FROM ${process.env.dbdatabase}.systemsettings `;

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
        (${systemsettings.userid}, "${systemsettings.avatar}", 
        "${systemsettings.blurb}", "${systemsettings.primarycolor}", 
        "${systemsettings.secondarycolor}");`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(systemsettings) {
    const sql = `UPDATE ${process.env.dbdatabase}.systemsettings 
        SET userid=${systemsettings.userid}, avatar="${systemsettings.avatar}", 
        blurb="${systemsettings.blurb}", primarycolor="${systemsettings.primarycolor}", 
        secondarycolor="${systemsettings.secondarycolor}";`;
    
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
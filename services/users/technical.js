const db = require('../db');

const select = `SELECT id, userid, digitalart_media, gamedevelopment, officesoftwareproficiency, 
    softwaredevelopment, technicalwriting, other 
    FROM ${process.env.dbdatabase}.technicalaptitude `;

async function getByUserID(id) {
    const sql = `${select} WHERE userid=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function create(technical) {
    const sql = `INSERT INTO ${process.env.dbdatabase}.technicalaptitude 
        (userid, digitalart_media, gamedevelopment, officesoftwareproficiency, 
        softwaredevelopment, technicalwriting, other) 
        VALUES 
        (${technical.data.userid}, ${technical.data.digitalart_media}, ${technical.data.gamedevelopment}, 
        ${technical.data.officesoftwareproficiency}, ${technical.data.softwaredevelopment}, 
        ${technical.data.technicalwriting}, ${technical.data.other});`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(technical) {
    const sql = `UPDATE ${process.env.dbdatabase}.technicalaptitude 
        SET userid=${technical.data.userid}, digitalart_media=${technical.data.digitalart_media}, 
        gamedevelopment=${technical.data.gamedevelopment}, officesoftwareproficiency=${technical.data.officesoftwareproficiency}, 
        softwaredevelopment=${technical.data.softwaredevelopment}, technicalwriting=${technical.data.technicalwriting}, 
        other=${technical.data.other} 
        WHERE userid=${technical.data.userid};`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function remove(id) {
    const sql = `DELETE FROM ${process.allowedNodeEnvironmentFlags.dbdatabase}.technicalaptitude WHERE userid=${id};`;

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
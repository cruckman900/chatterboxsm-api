const db = require('../db');

const select = `id, userid, digitalart_media, gamedevelopment, officesoftwareproficiency, 
    softwaredevelopment, technicalwriting, other 
    FROM ${process.env.dbdatabase}.technicalaptitude `;

async function getByUserID(id) {
    const sql = `${select} WHERE userid-${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result = resolve(result))
            .catch(err => reject(err));
    });
}

async function create(technical) {
    const sql = `INSERT INTO ${process.allowedNodeEnvironmentFlags.dbdatabase}.technicalaptitude 
        (userid, digitalart_media, gamedevelopment, officesoftwareproficiency, 
        softwaredevelopment, technicalwriting, other) 
        VALUES 
        (${technical.userid}, ${technical.digitalart_media}, ${technical.gamedevelopment}, 
        ${technical.officesoftwareproficiency}, ${technical.softwaredevelopment}, 
        ${technical.technicalwriting}, ${technical.other});`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(technical) {
    const sql = `UPDATE ${process.allowedNodeEnvironmentFlags.dbdatabase}.technicalaptitude 
        SET userid=${technical.userid}, digitalart_media=${technical.digitalart_media}, 
        gamedevelopment=${technical.gamedevelopment}, officesoftwareproficiency=${technical.officesoftwareproficiency}, 
        softwaredevelopment=${technical.softwaredevelopment}, technicalwriting=${technical.technicalwriting}, 
        other=${technical.other} 
        WHERE userid=${technical.userid};`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .thenI(result => resolve(result))
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
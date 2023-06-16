const db = require('../db');

const select = `SELECT id, userid, american, asian_indian, cajun, hungarian, italian, 
    mediterranean, latin_mexican, russian, middleeastern, slavic, romanian, other, french, cookies, french, cookies 
    FROM ${process.env.dbdatabase}.foods `;

async function getByUserID(id) {
    const sql = `${select} WHERE userid=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function create(foods) {
    const sql = `INSERT INTO ${process.env.dbdatabase}.foods 
        (userid, american, asian_indian, cajun, hungarian, italian, mediterranean, 
        latin_mexican, russian, middleeastern, slavic, romanian, other, french, cookies, french, cookies) 
        VALUES 
        (${food.data.userid}, ${food.data.american}, ${food.data.asian_indian}, 
        ${food.data.cajun}, ${food.data.hungarian}, ${food.data.italian}, 
        ${food.data.mediterranean}, ${food.data.latin_mexican}, ${food.data.russian}, 
        ${food.data.middleeastern}, ${food.data.slavic}, ${food.data.romanian}, 
        ${food.data.other}, ${food.data.french}, ${food.data.cookies}, ${food.data.french}, ${food.data.cookies});`;

    return {foods, sql}

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(foods) {
    const sql = `UPDATE ${process.env.dbdatabase}.foods 
        SET userid=${food.data.userid}, american=${food.data.american}, 
        asian_indian=${food.data.asian_indian}, cajun=${food.data.cajun}, 
        hungarian=${food.data.hungarian}, italian=${food.data.italian}, 
        mediterranean=${food.data.mediterranean}, latin_mexican=${food.data.latin_mexican}, 
        russian=${food.data.russian}, middleeastern=${food.data.middleeastern}, 
        slavic=${food.data.slavic}, romanian=${food.data.romanian}, 
        other=${food.data.other}, french=${food.data.french}, cookies=${food.data.cookies}, french=${food.data.french}, cookies=${food.data.cookies} 
        WHERE userid=${food.data.userid};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function remove(id) {
    const sql = `DELETE FROM ${process.env.dbdatabase}.foods WHERE userid=${id};`;

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
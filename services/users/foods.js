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
        latin_mexican, russian, middleeastern, slavic, romanian, other, french, cookies) 
        VALUES 
        (${foods.data.userid}, ${foods.data.american}, ${foods.data.asian_indian}, 
        ${foods.data.cajun}, ${foods.data.hungarian}, ${foods.data.italian}, 
        ${foods.data.mediterranean}, ${foods.data.latin_mexican}, ${foods.data.russian}, 
        ${foods.data.middleeastern}, ${foods.data.slavic}, ${foods.data.romanian}, 
        ${foods.data.other}, ${foods.data.french}, ${foods.data.cookies});`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(foods) {
    const sql = `UPDATE ${process.env.dbdatabase}.foods 
        SET userid=${foods.data.userid}, american=${foods.data.american}, 
        asian_indian=${foods.data.asian_indian}, cajun=${foods.data.cajun}, 
        hungarian=${foods.data.hungarian}, italian=${foods.data.italian}, 
        mediterranean=${foods.data.mediterranean}, latin_mexican=${foods.data.latin_mexican}, 
        russian=${foods.data.russian}, middleeastern=${foods.data.middleeastern}, 
        slavic=${foods.data.slavic}, romanian=${foods.data.romanian}, 
        other=${foods.data.other}, french=${foods.data.french}, cookies=${foods.data.cookies} 
        WHERE userid=${foods.data.userid};`;

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
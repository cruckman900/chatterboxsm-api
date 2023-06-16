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
        (${foods.userid}, ${foods.american}, ${foods.asian_indian}, 
        ${foods.cajun}, ${foods.hungarian}, ${foods.italian}, 
        ${foods.mediterranean}, ${foods.latin_mexican}, ${foods.russian}, 
        ${foods.middleeastern}, ${foods.slavic}, ${foods.romanian}, 
        ${foods.other}, ${foods.data.french}, ${foods.data.cookies}, ${foods.french}, ${foods.cookies});`;

    return {foods, sql}

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(foods) {
    const sql = `UPDATE ${process.env.dbdatabase}.foods 
        SET userid=${foods.userid}, american=${foods.american}, 
        asian_indian=${foods.asian_indian}, cajun=${foods.cajun}, 
        hungarian=${foods.hungarian}, italian=${foods.italian}, 
        mediterranean=${foods.mediterranean}, latin_mexican=${foods.latin_mexican}, 
        russian=${foods.russian}, middleeastern=${foods.middleeastern}, 
        slavic=${foods.slavic}, romanian=${foods.romanian}, 
        other=${foods.other}, french=${foods.data.french}, cookies=${foods.data.cookies}, french=${foods.french}, cookies=${foods.cookies} 
        WHERE userid=${foods.userid};`;

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
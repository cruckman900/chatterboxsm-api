const db = require('../db');

const select = `SELECT id, userid, archery_guns, arts_crafts, bars_clubs, boxing_wrestling, 
    billiards_darts, boating_camping, classicsports, cycling, fishing_hunting, hiking_climbing, 
    machines_electronics, martialarts, musicalinstruments, puzzles_games, reading_writing, 
    singing_dancing, swimming, videogames, walking_running, watchingtv, other 
    FROM ${process.env.dbdatabase}.activities `;

async function getByUserID(id) {
    const sql = `${select} WHERE userid=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function create(activities) {
    const sql = `INSERT INTO ${process.env.dbdatabase}.activities 
        (userid, archery_guns, arts_crafts, bars_clubs, boxing_wrestling, billiards_darts, 
        boating_camping, classicsports, cycling, fishing_hunting, hiking_climbing, machines_electronics, 
        martialarts, musicalinstruments, puzzles_games, reading_writing, singing_dancing, 
        swimming, videogames, walking_running, watchingtv, other) 
        VALUES 
        (${activities.data.userid}, ${activities.data.archery_guns}, ${activities.data.arts_crafts}, 
        ${activities.data.bars_clubs}, ${activities.data.boxing_wrestling}, ${activities.data.billiards_darts}, 
        ${activities.data.boating_camping}, ${activities.data.classicsports}, ${activities.data.cycling}, 
        ${activities.data.fishing_hunting}, ${activities.data.hiking_climbing}, ${activities.data.machines_electronics}, 
        ${activities.data.martialarts}, ${activities.data.musicalinstruments}, ${activities.data.puzzles_games}, 
        ${activities.data.reading_writing}, ${activities.data.singing_dancing}, ${activities.data.swimming}, 
        ${activities.data.videogames}, ${activities.data.walking_running}, ${activities.data.watchingtv}, ${activities.data.other});`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(activities) {
    const sql = `UPDATE ${process.env.dbdatabase}.activities 
        SET userid=${activities.data.userid}, archery_guns=${activities.data.archery_guns}, 
        arts_crafts=${activities.data.arts_crafts}, bars_clubs=${activities.data.bars_clubs}, 
        boxing_wrestling=${activities.data.boxing_wrestling}, billiards_darts=${activities.data.billiards_darts}, 
        boating_camping=${activities.data.boating_camping}, classicsports=${activities.data.classicsports}, 
        cycling=${activities.data.cycling}, fishing_hunting=${activities.data.fishing_hunting}, 
        hiking_camping=${activities.data.hiking_climbing}, machines_electronics=${activities.data.machines_electronics}, 
        martialarts=${activities.data.martialarts}, musicalinstruments=${activities.data.musicalinstruments}, 
        puzzles_games=${activities.data.puzzles_games}, reading_writing=${activities.data.reading_writing}, 
        singing_dancing=${activities.data.singing_dancing}, swimming=${activities.data.swimming}, 
        videogames=${activities.data.videogames}, walking_running=${activities.data.walking_running}, 
        watchingtv=${activities.data.watchingtv}, other=${activities.data.other} 
        WHERE userid=${activities.data.userid};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function remove(id) {
    const sql = `DELETE FROM ${process.env.dbdatabase}.activities WHERE userid=${id};`;

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
const db = require('../db');

const select = `SELECT id, userid, archery_guns, arts_crafts, bars_clubs, boxing_wrestling, 
    billiards_darts, boating_camping, classicsports, cycling, fishing_hunting, hiking_climbing, 
    machines_electronics, martialarts, musicalinstruments, puzzles_games, reading_writing, 
    singing_dancing, swimming, videogames, walking_running, watchingtb, other 
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
        (${activities.userid}, ${activities.archery_guns}, ${activities.arts_crafts}, 
        ${activities.bars_clubs}, ${activities.boxing_wrestling}, ${activities.billiards_darts}, 
        ${activities.boating_camping}, ${activities.classicsports}, ${activities.cycling}, 
        ${activities.fishing_hunting}, ${activities.hiking_climbing}, ${activities.machines_electronics}, 
        ${activities.martialarts}, ${activities.musicalinstruments}, ${activities.puzzles_games}, 
        ${activities.reading_writing}, ${activities.singing_dancing}, ${activities.swimming}, 
        ${activities.videogames}, ${activities.walking_running}, ${activities.watchingtv}, ${activities.other});`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(activities) {
    const sql = `UPDATE ${process.env.dbdatabase}.activities 
        SET userid=${activities.userid}, archery_guns=${activities.archery_guns}, 
        arts_crafts=${activities.arts_crafts}, bars_clubs=${activities.bars_clubs}, 
        boxing_wrestling=${activities.boxing_wrestling}, billiards_darts=${activities.billiards_darts}, 
        boating_camping=${activities.boating_camping}, classicsports=${activities.classicsports}, 
        cycling=${activities.cycling}, fishing_hunting=${activities.fishing_hunting}, 
        hiking_camping=${activities.hiking_climbing}, machines_electronics=${activities.machines_electronics}, 
        martialarts=${activities.martialarts}, musicalinstruments=${activities.musicalinstruments}, 
        puzzles_games=${activities.puzzles_games}, reading_writing=${activities.reading_writing}, 
        singing_dancing=${activities.singing_dancing}, swimming=${activities.swimming}, 
        videogames=${activities.videogames}, walking_running=${activities.walking_running}, 
        other=${activities.other} 
        WHERE userid=${activities.userid};`;

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
const db = require('../db');

const select = `SELECT id, userid, action, comedy, comics_animation, documentary, drama, 
    history, mystery, nature, news_worldaffairs, religion, romance, scifi, sports, 
    suspense_thriller, other 
    FROM ${process.env.dbdatabase}.movies `;

async function getByUserID(id) {
    const sql = `${select} WHERE userid=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function create(movies) {
    const sql = `INSERT INTO ${process.env.dbdatabase}.movies 
        (userid, action, comedy, comics_animation, documentary, drama, 
        history, mystery, nature, news_worldaffairs, religion, romance, scifi, sports, 
        suspense_thriller, other) 
        VALUES
        (${movies.userid}, ${movies.action}, ${movies.comedy}, ${movies.comics_animation}, 
        ${movies.documentary}, ${movies.drama}, ${movies.history}, ${movies.mystery}, 
        ${movies.nature}, ${movies.news_worldaffairs}, ${movies.religion}, 
        ${movies.romance}, ${movies.scifi}, ${movies.sports}, 
        ${movies.suspense_thriller}, ${movies.other});`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(movies) {
    const sql = `UPDATE ${process.env.dbdatabase}.movies 
        SET userid=${movies.userid}, action=${movies.action}, comedy=${movies.comedy}, 
        comics_animation=${movies.comics_animation}, documentary=${movies.documentary}, 
        drama=${movies.drama}, history=${movies.history}, mystery=${movies.mystery}, 
        nature=${movies.nature}, news_worldaffairs=${movies.news_worldaffairs}, religion=${movies.religion} 
        romance=${movies.romance}, scifi=${movies.scifi}, sports=${movies.sports}, 
        suspense_thriller=${movies.suspense_thriller}, other=${movies.other} 
        WHERE userid=${movies.userid};`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function remove(id) {
    const sql = `DELETE FROM ${process.env.dbdatabase}.movies WHERE userid=${id};`;

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
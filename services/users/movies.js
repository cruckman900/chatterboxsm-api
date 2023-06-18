const db = require('../db');

const select = `SELECT id, userid, action, comedy, comics_animation, documentary, drama, 
    history, mystery, nature, news_worldaffairs, religion, romance, scifi, sports, 
    suspense_thriller, western, other 
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
        suspense_thriller, western, other) 
        VALUES
        (${movies.data.userid}, ${movies.data.action}, ${movies.data.comedy}, ${movies.data.comics_animation}, 
        ${movies.data.documentary}, ${movies.data.drama}, ${movies.data.history}, ${movies.data.mystery}, 
        ${movies.data.nature}, ${movies.data.news_worldaffairs}, ${movies.data.religion}, 
        ${movies.data.romance}, ${movies.data.scifi}, ${movies.data.sports}, 
        ${movies.data.suspense_thriller}, ${movies.data.western}, ${movies.data.other});`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(movies) {
    const sql = `UPDATE ${process.env.dbdatabase}.movies 
        SET userid=${movies.data.userid}, action=${movies.data.action}, comedy=${movies.data.comedy}, 
        comics_animation=${movies.data.comics_animation}, documentary=${movies.data.documentary}, 
        drama=${movies.data.drama}, history=${movies.data.history}, mystery=${movies.data.mystery}, 
        nature=${movies.data.nature}, news_worldaffairs=${movies.data.news_worldaffairs}, religion=${movies.data.religion} 
        romance=${movies.data.romance}, scifi=${movies.data.scifi}, sports=${movies.data.sports}, 
        suspense_thriller=${movies.data.suspense_thriller}, western=${movies.data.western}, other=${movies.data.other} 
        WHERE userid=${movies.data.userid};`;
    
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
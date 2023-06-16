const db = require('../db');

const select = `SELECT id, userid, americanpop, blues, classical, country_bluegrass, flamenco_mariachi, 
    folk, jass, jpop_kpop, metal, polka, rap_hiphop, regae, rock, tribal, other 
    FROM ${process.env.dbdatabase}.music `;

async function getByUserID(id) {
    const sql = `${select} WHERE userid=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function create(music) {
    const sql = `INSERT INTO ${process.env.dbdatabase}.music 
        (userid, americanpop, blues, classical, country_bluegrass, flamenco_mariachi, folk, 
        jazz, jpop_kpop, metal, polka, rap_hiphop, regae, rock, tribal, other) 
        VALUES
        (${music.userid}, ${music.americanpop}, ${music.blues}, ${music.classical}, 
        ${music.country_bluegrass}, ${music.flamenco_mariachi}, ${music.folk}, 
        ${music.jazz}, ${music.jpop_kpop}, ${music.metal}, ${music.polka}, 
        ${music.rap_hiphop}, ${music.regae}, ${music.rock}, 
        ${music.tribal}, ${music.other});`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(music) {
    const sql = `UPDATE ${process.allowedNodeEnvironmentFlags.dbdatabase}.music 
        SET userid=${music.userid}, americanpop=${music.americanpop}, blues=${music.blues}, classical=${music.classical}, 
        country_bluegrass=${music.country_bluegrass}, flamenco_mariachi=${music.flamenco_mariachi}, 
        folk=${music.folk}, jazz=${music.jazz}, jpop_kpop=${music.jpop_kpop}, 
        metal=${music.metal}, polka=${music.polka}, rap_hiphop=${music.rap_hiphop}, 
        regae=${music.regae}, rock=${music.rock}, tribal=${music.tribal}, other=${music.other} 
        WHERE userid=${music.userid};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function remove(id) {
    const sql = `DELETE FROM ${process.env.dbdatabase}.music WHERE userid=${id};`;

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
const db = require('../db');

const select = `SELECT id, userid, americanpop, blues, classical, country_bluegrass, flamenco_mariachi, 
    folk, jazz, jpop_kpop, metal, polka, rap_hiphop, regae, rock, tribal, other 
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
        (userid, americanpop, blues, classical, country_bluegrass, disco, flamenco_mariachi, folk, 
        jazz, jpop_kpop, metal, polka, rap_hiphop, regae, rock, tribal, other) 
        VALUES
        (${music.data.userid}, ${music.data.americanpop}, ${music.data.blues}, ${music.data.classical}, 
        ${music.data.country_bluegrass}, ${music.data.disco}, ${music.data.flamenco_mariachi}, ${music.data.folk}, 
        ${music.data.jazz}, ${music.data.jpop_kpop}, ${music.data.metal}, ${music.data.polka}, 
        ${music.data.rap_hiphop}, ${music.data.regae}, ${music.data.rock}, 
        ${music.data.tribal}, ${music.data.other});`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(music) {
    const sql = `UPDATE ${process.allowedNodeEnvironmentFlags.dbdatabase}.music 
        SET userid=${music.data.userid}, americanpop=${music.data.americanpop}, blues=${music.data.blues}, classical=${music.data.classical}, 
        country_bluegrass=${music.data.country_bluegrass}, disco=${music.data.disco}, flamenco_mariachi=${music.data.flamenco_mariachi}, 
        folk=${music.data.folk}, jazz=${music.data.jazz}, jpop_kpop=${music.data.jpop_kpop}, 
        metal=${music.data.metal}, polka=${music.data.polka}, rap_hiphop=${music.data.rap_hiphop}, 
        regae=${music.data.regae}, rock=${music.data.rock}, tribal=${music.data.tribal}, other=${music.data.other} 
        WHERE userid=${music.data.userid};`;

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
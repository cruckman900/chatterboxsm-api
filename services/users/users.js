const db = require('../db');

const select = `SELECT u.id as USERID, u.firstname, u.middlename, u.lastname, u.screenname, 
    u.email, u.username, u.password, 
    u.agerange, u.gender, u.description, u.verificationcode, u.validated, u.isLoggedIn, 
    l.id AS LID, l.city, l.state, l.country, 
    ss.id AS SSID, ss.avatar, ss.primarycolor, ss.secondarycolor, 
    act.id AS ACTID, act.archery_guns, act.arts_crafts, act.bars_clubs, act.boxing_wrestling, act.billiards_darts, 
    act.boating_camping, act.classicsports, act.cycling, act.fishing_hunting, act.hiking_climbing, 
    act.machines_electronics, act.martialarts, act.musicalinstruments ,act.puzzles_games, 
    act.reading_writing, act.singing_dancing, act.swimming, act.videogames, act.walking_running, 
    act.watchingtv, act.other as activities_other, 
    f.id AS FID, f.american, f.asian_indian, f.cajun, f.hungarian, f.italian, f.mediterranean, f.latin_mexican, 
    f.russian, f.middleeastern, f.slavic, f.romanian, f.other as foods_other, f.french, f.cookies, 
    mov.id AS MOVID, mov.action, mov.comedy, mov.comics_animation, mov.documentary, mov.drama, mov.history, mov.mystery, 
    mov.nature, mov.news_worldaffairs, mov.religion, mov.romance, mov.scifi, mov.sports, 
    mov.suspense_thriller, mov.western, mov.other as movies_other, 
    mus.id AS MUSID, mus.americanpop, mus.blues, mus.classical, mus.country_bluegrass, mus.disco, mus.flamenco_mariachi, mus.folk, mus.jazz, 
    mus.jpop_kpop, mus.metal, mus.polka, mus.rap_hiphop, mus.regae, mus.rock, mus.tribal, mus.other as music_other, 
    tech.id AS TECHID, tech.digitalart_media, tech.gamedevelopment, tech.officesoftwareproficiency, tech.softwaredevelopment, 
    tech.technicalwriting, tech.other as tech_other 
    FROM ${process.env.dbdatabase}.users u 
        LEFT JOIN ${process.env.dbdatabase}.locations l ON u.id = l.userid 
        LEFT JOIN ${process.env.dbdatabase}.systemsettings ss ON u.id = ss.userid 
        LEFT JOIN ${process.env.dbdatabase}.activities act ON u.id = act.userid 
        LEFT JOIN ${process.env.dbdatabase}.foods f ON u.id = f.userid 
        LEFT JOIN ${process.env.dbdatabase}.movies mov ON u.id = mov.userid 
        LEFT JOIN ${process.env.dbdatabase}.music mus ON u.id = mus.userid 
        LEFT JOIN ${process.env.dbdatabase}.technicalaptitude tech ON u.id = tech.userid`;


async function getUserCount() {
    const sql =`SELECT COUNT(*) AS user_count 
        FROM ${process.env.dbdatabase}.users`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function getUserCountIsLoggedIn() {
    const sql = `SELECT COUNT(*) AS logged_in_user_count 
        FROM ${process.env.dbdatabase}.users 
        WHERE isLoggedIn=true`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function getAll() {
    return new Promise(function(resolve, reject) {
        db.query(select)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function getByID(id) {
    const sql = `${select} WHERE u.id=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function getByUsernameAndPassword(username, password) {
    const sql = `${select} WHERE u.username="${username}" AND u.password="${password}";`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function getByEmailAndUsername(email, username) {
    const sql = `${select} WHERE u.email="${email}" AND u.username="${username}";`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function create(user) {
    const sql = `INSERT INTO ${process.env.dbdatabase}.users 
        (firstname, middlename, lastname, screenname, email, agerange, gender, 
        username, password, description, verificationcode, validated) 
        VALUES 
        ("${user.data.firstname}", "${user.data.middlename}", "${user.data.lastname}", "${user.data.screenname}", 
        "${user.data.email}", "${user.data.agerange}", "${user.data.gender}", "${user.data.username}", "${user.data.password}", 
        "${user.data.description}", ${user.data.verificationcode}, ${user.data.validated});`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function update(user) {
    const sql = `UPDATE ${process.env.dbdatabase}.users 
        SET firstname="${user.data.firstname}", middlename="${user.data.middlename}", lastname="${user.data.lastname}", 
        screenname="${user.data.screenname}", email="${user.data.email}", agerange="${user.data.agerange}", gender="${user.data.gender}", 
        username="${user.data.username}", password="${user.data.password}", description="${user.data.description}", 
        verificationcode=${user.data.verificationcode}, validated=${user.data.validated}, isLoggedIn=${user.data.isLoggedIn} 
        WHERE username="${user.data.username}" AND password="${user.data.password}";`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function updatePassword(user) {
    const sql = `UPDATE ${process.env.dbdatabase}.users
        SET password="${user.data.password}"
        WHERE id=${user.data.id};`;
    
    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

async function remove(id) {
    const sql = `DELETE FROM ${process.env.dbdatabase}.users WHERE id=${id};`;

    return new Promise(function(resolve, reject) {
        db.query(sql)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

module.exports = {
    getUserCount,
    getUserCountIsLoggedIn,
    getAll,
    getByID,
    getByUsernameAndPassword,
    getByEmailAndUsername,
    create,
    update,
    updatePassword,
    remove
}
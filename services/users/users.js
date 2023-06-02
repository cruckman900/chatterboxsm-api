const db = require('../db');
const helper = require('../../helper');
const config = require('../../config');

const select = `SELECT u.id as USERID, u.firstname, u.middlename, u.lastname, u.screenname, u.email, 
    u.agerange, u.gender, u.username, u.password, u.description, u.verificationcode, u.validated, 
    l.city, l.state, l.country, 
    ss.id, ss.avatar, ss.primarycolor, ss.secondarycolor, 
    act.id, act.archery_guns, act.arts_crafts, act.bars_clubs, act.boxing_wrestling, act.billiards_darts, 
    act.boating_camping, act.classicsports, act.cycling, act.fishing_hunting, act.hiking_climbing, 
    act.machines_electronics, act.martialarts, act.musicalinstruments ,act.puzzles_games, 
    act.reading_writing, act.singing_dancing, act.swimming, act.videogames, act.walking_running, 
    act.watchingtv, act.other as activities_other, 
    f.id, f.american, f.asian_indian, f.cajun, f.hungarian, f.italian, f.mediterranean, f.latin_mexican, 
    f.russian, f.middleeastern, f.slavic, f.romanian, f.other as foods_other, 
    mov.id, mov.action, mov.comedy, mov.comics_animation, mov.documentary, mov.drama, mov.history, mov.mystery, 
    mov.nature, mov.news_worldaffairs, mov.religion, mov.romance, mov.scifi, mov.sports, 
    mov.suspense_thriller, mov.other as movies_other, 
    mus.id, mus.americanpop, mus.classical, mus.country_bluegrass, mus.flamenco_mariachi, mus.folk, mus.jazz, 
    mus.jpop_kpop, mus.metal, mus.polka, mus.rap_hiphop, mus.regae, mus.rock, mus.tribal, mus.other as music_other, 
    tech.id, tech.digitalart_media, tech.gamedevelopment, tech.officesoftwareproficiency, tech.softwaredevelopment, 
    tech.technicalwriting, tech.other as tech_other 
    FROM ${process.env.dbdatabase}.users u 
        LEFT JOIN ${process.env.dbdatabase}.locations l ON u.id = l.userid
        LEFT JOIN ${process.env.dbdatabase}.systemsettings ss ON u.id = ss.userid 
        LEFT JOIN ${process.env.dbdatabase}.activities act ON u.id = act.userid 
        LEFT JOIN ${process.env.dbdatabase}.foods f ON u.id = f.userid 
        LEFT JOIN ${process.env.dbdatabase}.movies mov ON u.id = mov.userid 
        LEFT JOIN ${process.env.dbdatabase}.music mus ON u.id = mus.userid 
        LEFT JOIN ${process.env.dbdatabase}.technicalaptitude tech ON u.id = tech.userid`;

async function getAll() {
    const sql = `SELECT * FROM users;`;

    const result = await db.query(sql);
    return result;
}

async function getByID(id) {
    const sql = `${select} WHERE u.id=${id};`;

    const result = await db.query(sql);
    return result;
}

async function getByUsernameAndPassword(username, password) {
    const sql = `${select} WHERE u.username="${username}" AND u.password="${password}";`;

    const result = await db.query(sql);
    return result;
}

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const sql = `${select} LIMIT ${offset}, ${config.listPerPage};`;

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function create(user) {
    var sql = `INSERT INTO ${process.env.dbdatabase}.users 
    (firstname, middlename, lastname, screenname, email, agerange, gender, 
    username, password, description, verificationcode, validated) 
    VALUES 
    ("${user.data.firstname}", "${user.data.middlename}", "${user.data.lastname}", "${user.data.screenname}", 
    "${user.data.email}", "${user.data.agerange}", "${user.data.gender}", "${user.data.username}", "${user.data.password}", 
    "${user.data.description}", ${user.data.verificationcode}, ${user.data.validated});`;

    const result = await db.query(sql);

    let message = 'Error in creating user';

    if (result) {
        message = 'User created successfully';
    }

    return result;
}

async function update(user) {
    const sql = `UPDATE ${process.env.dbdatabase}.users 
    SET firstname="${user.data.firstname}", middlename="${user.data.middlename}", lastname="${user.data.lastname}", 
    screenname="${user.data.screenname}", email="${user.data.email}", agerange="${user.data.agerange}", gender="${user.data.gender}", 
    username="${user.data.username}", password="${user.data.password}", description="${user.data.description}", 
    verificationcode=${user.data.verificationcode}, validated=${user.data.validated}
    WHERE username="${user.data.username}" AND password="${user.data.password}";`

    // console.log('update', sql);

    const result = await db.query(sql);

    let message = 'Error in updating user';

    if (result.affectedRows) {
        message = 'User updated successfully';
    }

    return {message};
}

async function remove(id) {
    const result = await db.query(
        `DELETE FROM ${process.env.dbdatabase}.users WHERE id=${id};`
    );

    let message = 'Error in deleting user';

    if (result.affectedRows) {
        message = 'User deleted successfully';
    }

    return {message};
}

module.exports = {
    getAll,
    getByID,
    getByUsernameAndPassword,
    getMultiple,
    create,
    update,
    remove
}
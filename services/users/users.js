const db = require('../db');
const helper = require('../../helper');
const config = require('../../config');

async function getByID(id) {
    const sql = `SELECT u.id, u.firstname, u.middlename, u.lastname, u.screenname, u.email, 
    u.agerange, u.gender, u.username, u.password, u.description, u.verificationcode, u.validated, 
    l.city, l.state, l.country, 
    ss.avatar, ss.primarycolor, ss.secondarycolor, 
    act.archery_guns, act.arts_crafts, act.bars_clubs, act.boxing_wrestling, act.billiards_darts, 
    act.boating_camping, act.classicsports, act.cycling, act.fishing_hunting, act.hiking_climbing, 
    act.machines_electronics, act.martialarts, act.musicalinstruments ,act.puzzles_games, 
    act.reading_writing, act.singing_dancing, act.swimming, act.videogames, act.walking_running, 
    act.watchingtv, act.other as activities_other, 
    f.american, f.asian_indian, f.cajun, f.hungarian, f.italian, f.mediterranean, f.latin_mexican, 
    f.russian, f.middleeastern, f.slavic, f.romanian, f.other as foods_other, 
    mov.action, mov.comedy, mov.comics_animation, mov.documentary, mov.drama, mov.history, mov.mystery, 
    mov.nature, mov.news_worldaffairs, mov.religion, mov.romance, mov.scifi, mov.sports, 
    mov.suspense_thriller, mov.other as movies_other, 
    mus.americanpop, mus.classical, mus.country_bluegrass, mus.flamenco_mariachi, mus.folk, mus.jazz, 
    mus.jpop_kpop, mus.metal, mus.polka, mus.rap_hiphop, mus.regae, mus.rock, mus.tribal, mus.other as music_other, 
    tech.digitalart_media, tech.gamedevelopment, tech.officesoftwareproficiency, tech.softwaredevelopment, 
    tech.technicalwriting, tech.other as tech_other 
    FROM users u 
        LEFT JOIN locations l ON u.id = l.userid
        LEFT JOIN systemsettings ss ON u.id = ss.userid 
        LEFT JOIN activities act ON u.id = act.userid 
        LEFT JOIN foods f ON u.id = f.userid 
        LEFT JOIN movies mov ON u.id = mov.userid 
        LEFT JOIN music mus ON u.id = mus.userid 
        LEFT JOIN technicalaptitude tech ON u.id = tech.userid 
    WHERE u.id=${id};`;

    console.log(sql);

    const result = await db.query(sql);

    return result;
}

async function getByUsernameAndPassword(username, password) {
    console.log(username + " " + password);
    const sql = `SELECT u.id, u.firstname, u.middlename, u.lastname, u.screenname, u.email, 
    u.agerange, u.gender, u.username, u.password, u.description, u.verificationcode, u.validated, 
    l.city, l.state, l.country, 
    ss.avatar, ss.primarycolor, ss.secondarycolor, 
    act.archery_guns, act.arts_crafts, act.bars_clubs, act.boxing_wrestling, act.billiards_darts, 
    act.boating_camping, act.classicsports, act.cycling, act.fishing_hunting, act.hiking_climbing, 
    act.machines_electronics, act.martialarts, act.musicalinstruments ,act.puzzles_games, 
    act.reading_writing, act.singing_dancing, act.swimming, act.videogames, act.walking_running, 
    act.watchingtv, act.other as activities_other, 
    f.american, f.asian_indian, f.cajun, f.hungarian, f.italian, f.mediterranean, f.latin_mexican, 
    f.russian, f.middleeastern, f.slavic, f.romanian, f.other as foods_other, 
    mov.action, mov.comedy, mov.comics_animation, mov.documentary, mov.drama, mov.history, mov.mystery, 
    mov.nature, mov.news_worldaffairs, mov.religion, mov.romance, mov.scifi, mov.sports, 
    mov.suspense_thriller, mov.other as movies_other, 
    mus.americanpop, mus.classical, mus.country_bluegrass, mus.flamenco_mariachi, mus.folk, mus.jazz, 
    mus.jpop_kpop, mus.metal, mus.polka, mus.rap_hiphop, mus.regae, mus.rock, mus.tribal, mus.other as music_other, 
    tech.digitalart_media, tech.gamedevelopment, tech.officesoftwareproficiency, tech.softwaredevelopment, 
    tech.technicalwriting, tech.other as tech_other 
    FROM users u 
        LEFT JOIN locations l ON u.id = l.userid
        LEFT JOIN systemsettings ss ON u.id = ss.userid 
        LEFT JOIN activities act ON u.id = act.userid 
        LEFT JOIN foods f ON u.id = f.userid 
        LEFT JOIN movies mov ON u.id = mov.userid 
        LEFT JOIN music mus ON u.id = mus.userid 
        LEFT JOIN technicalaptitude tech ON u.id = tech.userid 
    WHERE u.username="${username}" AND u.password="${password}";`;

    console.log(sql);

    const result = await db.query(sql);

    return result;
}

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const sql = `SELECT u.id, u.firstname, u.middlename, u.lastname, u.screenname, u.email, 
    u.agerange, u.gender, u.username, u.password, u.description, u.verificationcode, u.validated, 
    l.city, l.state, l.country, 
    ss.avatar, ss.primarycolor, ss.secondarycolor, 
    act.archery_guns, act.arts_crafts, act.bars_clubs, act.boxing_wrestling, act.billiards_darts, 
    act.boating_camping, act.classicsports, act.cycling, act.fishing_hunting, act.hiking_climbing, 
    act.machines_electronics, act.martialarts, act.musicalinstruments ,act.puzzles_games, 
    act.reading_writing, act.singing_dancing, act.swimming, act.videogames, act.walking_running, 
    act.watchingtv, act.other as activities_other, 
    f.american, f.asian_indian, f.cajun, f.hungarian, f.italian, f.mediterranean, f.latin_mexican, 
    f.russian, f.middleeastern, f.slavic, f.romanian, f.other as foods_other, 
    mov.action, mov.comedy, mov.comics_animation, mov.documentary, mov.drama, mov.history, mov.mystery, 
    mov.nature, mov.news_worldaffairs, mov.religion, mov.romance, mov.scifi, mov.sports, 
    mov.suspense_thriller, mov.other as movies_other, 
    mus.americanpop, mus.classical, mus.country_bluegrass, mus.flamenco_mariachi, mus.folk, mus.jazz, 
    mus.jpop_kpop, mus.metal, mus.polka, mus.rap_hiphop, mus.regae, mus.rock, mus.tribal, mus.other as music_other, 
    tech.digitalart_media, tech.gamedevelopment, tech.officesoftwareproficiency, tech.softwaredevelopment, 
    tech.technicalwriting, tech.other as tech_other 
    FROM users u 
        LEFT JOIN locations l ON u.id = l.userid
        LEFT JOIN systemsettings ss ON u.id = ss.userid 
        LEFT JOIN activities act ON u.id = act.userid 
        LEFT JOIN foods f ON u.id = f.userid 
        LEFT JOIN movies mov ON u.id = mov.userid 
        LEFT JOIN music mus ON u.id = mus.userid 
        LEFT JOIN technicalaptitude tech ON u.id = tech.userid 
    LIMIT ${offset}, ${config.listPerPage};`;

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function create(user) {
    const sql = `INSERT INTO chatterboxsm.users 
    (firstname, middlename, lastname, screenname, email, agerange, gender, 
    username, password, description, verificationcode, validated) 
    VALUES 
    ("${user.data.firstname}", "${user.data.middlename}", "${user.data.lastname}", "${user.data.screenname}", 
    "${user.data.email}", "${user.data.agerange}", "${user.data.gender}", "${user.data.username}", "${user.data.password}", 
    "${user.data.description}", ${user.data.verificationcode}, ${user.data.validated});`

    const result = await db.query(sql);

    let message = 'Error in creating user';

    if (result.affectedRows) {
        message = 'User created successfully';
    }

    return {message};
}

async function update(id, user) {
    const result = await db.query(
        `UPDATE users 
        SET firstname="${user.data.firstname}" middlename="${user.data.middlename}", lastname="${user.data.lastname}" 
        screenname="${user.data.screenname}", email="${user.data.email}", agerange="${user.data.agerange}", gender="${user.data.gender}", 
        username="${user.data.username}", password="${user.data.password}", description="${user.data.description}", 
        verificationcode=${user.data.verificationcode}, validated=${user.data.validated}
        WHERE id=${id};`
    );

    let message = 'Error in updating user';

    if (result.affectedRows) {
        message = 'User updated successfully';
    }

    return {message};
}

async function remove(id) {
    const result = await db.query(
        `DELETE FROM users WHERE id=${id};`
    );

    let message = 'Error in deleting user';

    if (result.affectedRows) {
        message = 'User deleted successfully';
    }

    return {message};
}

module.exports = {
    getByID,
    getByUsernameAndPassword,
    getMultiple,
    create,
    update,
    remove
}
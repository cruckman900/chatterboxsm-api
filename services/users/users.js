const db = require('../db');
const helper = require('../../helper');
const config = require('../../config');
/*  users
    id:                     INT
    firstname:              VARCHAR(45)
    middlename:             VARCHAR(45)
    lastname:               VARCHAR(45)
    screenname:             VARCHAR(45)
    agerange:               VARCHAR(10)
    gender:                 VARCHAR(6)
    username:               VARCHAR(45)
    password:               VARCHAR(45)
    description:            VARCHAR(8000)
    validated:              TINYINT
*/
async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, firstname, middlename, lastname, screenname, 
        agerange, gender, username, password, description, validated 
        FROM users LIMIT ${offset}, ${config.listPerPage};`
    );

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
    getMultiple,
    create,
    update,
    remove
}
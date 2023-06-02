const dotenv = require('dotenv').config({ debug: true });

const config = {
    db: {
        host: process.env.dbhostname,
        port: process.env.dbport,
        user: process.env.dbuser,
        password: process.env.dbpass,
        database: process.env.dbdatabase,
    },
    listPerPage: 10,
};

module.exports = config;
const dotenv = require('dotenv').config({ debug: true });

const config = {
    db: {
        host: process.env.dbhostname,
        port: process.env.dbport,
        database: process.env.dbdatabase,
        user: process.env.dbuser,
        password: process.env.dbpass,
    },
    listPerPage: 10,
};

module.exports = config;
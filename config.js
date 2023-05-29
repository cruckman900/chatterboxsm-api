const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "localhost",
        port: 3306,
        database: "chatterboxsm",
        user: "root",
        password: "2008WJUGrad",
    },
    listPerPage: 10,
};

module.exports = config;
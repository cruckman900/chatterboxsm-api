const mariadb = require('mariadb');
const config = require('../config');

async function query(sql, params) {
    return new Promise(function(resolve, reject) {
        mariadb.createConnection(config.db).then(connection => {
            connection.query(sql, params)
                .then(rows => resolve(rows))
                .catch(err => reject(err))
                .then(() => connection.close());
        }).catch(err => reject(err))
    });
}

module.exports = {
    query
}
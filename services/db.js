async function query(sql, params) {
    const mariadb = require('mariadb');
    const config = require('../config');

    try {
        const connection = await mariadb.createConnection(config.db);
        const [results, ] = await connection.query(sql, params);
    
        console.log('db query results', results);
        return results;
    } catch (err) {
        throw err;
    } finally {
        if (connection) return connection.end();
    }
}

module.exports = {
    query
}
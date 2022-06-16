import mariadb from "mariadb";
import config from "./../config";

const connection = mariadb.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};
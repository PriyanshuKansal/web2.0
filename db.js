var mysql = require('mysql');
var db_config = {
    host: '127.0.0.1',
    user: 'root',
    password: 'b5e3fc8105b4ce',
    database: 'webapp'
}

var connection;

function handleDisconnect () {
    connection = mysql.createConnection(db_config);
    connection.connect(function (err) {
        if (err) {
            console.log('error when connecting to db: ', err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    connection.on('error', function (err) {
        if (err.code === 'PROTOCOL_CONNETION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });

}

handleDisconnect();

module.exports = connection;
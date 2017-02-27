//引入
var mssql = require('mssql');

//配置
var config = {
    user: 'sa',
    password: '123',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'dbBill',

    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}

//链接
var connect = function (callback) {
    mssql.connect(config, function (err) {
        callback(err);
    });
};

//sql
var sql = function (sql, callback) {
    connect(function (err) {
        new mssql.Request().query(sql, function (err, recordset) {
            callback(err, recordset);
        });
    });
}

var getTime = function () {
    var today = new Date();
    var yyyy = today.getFullYear();
    var MM = today.getMonth() + 1;
    var dd = today.getDate();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();

    MM = checkTime(MM);
    dd = checkTime(dd);
    mm = checkTime(mm);
    ss = checkTime(ss);

    var time = yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss;
    return time;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

module.exports = {
    sql: sql,
    getTime: getTime
}
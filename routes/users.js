var express = require('express');
var router = express.Router();
var sqlhelper = require("../common/sqlhelper");

router.post('/register', function (request, response, next) {
	var name = request.body.username;
	var pwd = request.body.pwd;
	var email = request.body.email;
	var face = "upload/userface/waicai.jpg";
	var regtime = sqlhelper.getTime();
	var logintime = sqlhelper.getTime();
	var states = 1;
	var sql = "insert into users values('" + name + "','" + pwd + "','" + email + "','" + face + "','" + regtime + "','" + logintime + "','" + states + "')";

	sqlhelper.sql(sql, function (e, r) {
		if (e) {
			response.send({
				code: "e",
				msg: e
			});
		} else {
			response.send({
				code: "s",
				msg: "注册成功！"
			});
		}
	});
});

router.get("/login", function (request, response, next) {
	var name = request.query.username;
	var pwd = request.query.pwd;
	var logintime = sqlhelper.getTime();
	var states = 1;

	var sql = "select * from users where name='" + name + "' and pwd='" + pwd + "'";
	sqlhelper.sql(sql, function (e, r) {
		if (e) {
			response.send({
				code: "e",
				msg: e
			});
		} else {
			if (r.length == 1) {
				request.session.id = r[0];
				request.session.name = r[1];
				response.send({
					code: "s",
					msg: "登陆成功！"
				});
			} else {
				response.send({
					code: "e",
					msg: "账号密码错误！"
				});
			}
		}
	});
});

module.exports = router;
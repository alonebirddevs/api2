/**
 * Created by davey on 3/31/15.
 */
var appModel = require('./appModel'),
	fs = require("fs"),
	yaml = require("js-yaml"),
	e = yaml.load(fs.readFileSync("config/database.yml")),
	async = require('async'),
	_ = require('underscore'),
	http = require('http'),
	table = 'user';

var user = {
	getUserById: function(userId, res) {
		if (!isNaN(ouid)) {
			var qry = "SELECT * FROM user WHERE user_id =" + userId + " AND user_status = 'active' ORDER BY user_name";
			appModel.ctPool.query(qry, function(err, data) {
				if (err) { res(err); return; }
				res(null,data);
			});
		} else {
			res('Invalid user_id value submitted');
		}
	},
};

module.exports = user;

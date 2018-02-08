/**
 * Created by davey on 3/31/15.
 */
var controller = require('./appController'),
	fs = require("fs"),
	userModel = require('../models/userModel');

var user = {
	getUserById: function(userId, res) {
		userModel.getUserById(userId, function(err, data) {
			controller.responsify(err, data, function(response){
				res(response);
			});
		});
	}
};

module.exports = user;

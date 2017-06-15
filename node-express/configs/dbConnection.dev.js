const mongoose = require('mongoose');

const connMongoDB = function(){
	return mongoose.createConnection('mongodb://localhost:27017/authorization-react-express');
}

module.exports = connMongoDB;

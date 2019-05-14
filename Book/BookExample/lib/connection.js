var mongoose = require('mongoose');
var dbUrl = 'mongodb://karthibp:<101195>@cluster0-lds2p.mongodb.net/test?retryWrites=true';
mongoose.connect(dbUrl);
// Close the Mongoose connection on Control+C
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected');
    process.exit(0);
    });
});

require('../models/employee');
require('../models/team');
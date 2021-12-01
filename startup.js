const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const userModel = require('./backend/models/user');

mongoose.connect(process.env.MONGO_DB_URL + process.env.MONGO_DB_NAME, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("Connected to database!");
})
.catch(err => {
  console.log("Connection failed!"); console.log(err);
});

mongoose.connection.on('error', err => {
  console.log(err);
})

const password = 'admin';
bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
.then(function(hashedPassword) {
    userModel.create({
        name: 'Admin',
        email: 'bharathi@unosales.com',
        phone:8946041736,
        password: hashedPassword,
        active: true
    }, function(usrErr, usrRes) {
        if(usrErr) {
            console.log(usrErr);
        } else {
            userModel.findByIdAndUpdate(usrRes._id, {createdBy: usrRes._id}, function(usrUpdateErr, usrUpdate) {
                if(usrUpdateErr) {
                    console.log(usrUpdateErr);
                } else {
                    console.log('Admin created successfully');
                } 
            });
        }
    });
})
.catch(function(err) { 
    console.log(err); }
);
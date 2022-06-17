require("dotenv").config();
require('./config/database');

const User = require('./models/user');
// User.create({name: 'Laura',email: 'joe@email.com',password: 'abcd'}).then(user => u = user);
// u
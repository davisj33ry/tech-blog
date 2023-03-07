const { User } = require('../models');

const userData = [{
        username: 'jaydoh@',
        password: 'password2'

    },
    {
        username: 'springchicken',
        password: 'password1'
    },
    {
        username: 'breakaleg',
        password: 'password3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
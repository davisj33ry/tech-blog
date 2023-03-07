const { Post } = require('../models');

const postData = [{
        title: 'Learn JavaScript',
        content: 'Now that you have completed your intro to HTML and CSS it is time to dive into JavaScript',
        user_id: 1

    },
    {
        title: 'Learn Vue.js',
        content: 'A prereq to learning this is having knowledge of JavaScript.',
        user_id: 2
    },
    {
        title: 'Learn Java',
        content: 'No Java and JavaScript are not the same.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
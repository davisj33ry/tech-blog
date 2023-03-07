const { Comment } = require('../models');

const commentData = [{
        comment_text: "Excellent post!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This post seems to be onesided.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Yes, it's one-sided, but spot on.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
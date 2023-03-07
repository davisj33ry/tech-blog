const express = require('express');
const router = express.Router();;
const apiRoutes = require('./api');
const homeRoutes = require('./home');
const dashboardRoutes = require('./home');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
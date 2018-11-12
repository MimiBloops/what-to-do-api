const express = require('express');
const router = express.Router();

const history = require('../controller/historyController');

router.route('/')
    .get(history.list_all_history)
    .post(history.create_a_history);

module.exports = router;
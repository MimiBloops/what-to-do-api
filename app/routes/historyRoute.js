const express = require('express');
const router = express.Router();

const history = require('../controller/historyController');



router.route('/')
    .get(history.list_all_history)
    .post(history.create_a_history);

/*router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handeling GET request to /history'
    });
    history.list_all_history;
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handeling post request to /history'
    });
    history.create_a_history;
});

/*router.route('/:isUser')
    .get(history.list_history_of_user);
*/
module.exports = router;
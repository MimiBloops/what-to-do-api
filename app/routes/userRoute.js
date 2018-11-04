const express = require('express');
const router = express.Router();

const user = require('../controller/userController');

router.get('/', (rew, res, next)=> {
    res.status(200).json({
        message: 'Handeling GET requests to /user'
    });
    user.list_all_user;
});

router.post('/', (rew, res, next)=> {
    res.status(200).json({
        message: 'Handeling POST requests to /user'
    });
    user.create_a_user;
});

router.get('/:createdAt', (req, res, next) => {
    const date = req.params.createdAt;
    if(!date){
        res.status(200).json({
            message: 'Getting user by createdAt date',
            date: date
        });
    }
})

router.patch('/', (rew, res, next)=> {
    res.status(200).json({
        message: 'Handeling UPDATE requests to /user'
    });
});

router.delete('/', (rew, res, next)=> {
    res.status(200).json({
        message: 'Handeling DELETE requests to /user'
    });
});

module.exports = router;
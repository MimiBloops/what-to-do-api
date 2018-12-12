'use strict';
module.exports = function (app) {
    var user = require('../controller/userController.js');

    app.route('/user')
        .get(user.list_all_user)
        .post(user.create_a_user);

    app.route('/user/:userId')
        .get(user.read_a_user)
        .put(user.update_a_user)
        .delete(user.delete_a_user);

    app.route('/user/:userId/type')
        .get(user.list_type_user)
        .post(user.add_type_user);

    app.route('/users/user/by/login/:userLogin')
        .get(user.read_user_by_login)
        .put(user.update_user_by_login);

    app.route('/users/history/by/id/:userId')
        .get(user.read_user_history)
        .post(user.create_user_history);
};
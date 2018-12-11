'use strict';
module.exports = function (app) {
    var user = require('../controller/historyController.js');

    app.route('/history')
        .get(user.list_all_history)
        .post(user.create_a_history);

    app.route('/history/:historyId')
        .get(user.read_a_history)
        .put(user.update_a_history)
        .delete(user.delete_a_history);
};
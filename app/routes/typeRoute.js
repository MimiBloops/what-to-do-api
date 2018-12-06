'use strict';
module.exports = function (app) {
    var type = require('../controller/typeController.js');

    app.route('/type')
        .get(type.list_all_type)
        .post(type.create_a_type);

    app.route('/type/:typeId')
        .get(type.read_a_type)
        .put(type.update_a_type)
        .delete(type.delete_a_type);
};
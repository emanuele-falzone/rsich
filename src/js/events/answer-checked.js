/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['view-container-channel']) {
            context.top.active('view-container-channel');
            context.vms['view-container-channel'].init({mask: 'details-question'});
        }
        data = data || {};
        var packet = {
            'id' : data['id'],
        };
        context.vms['details-question'].init({input: packet});
    };
};

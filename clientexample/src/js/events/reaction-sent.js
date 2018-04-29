/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['view-container-channel']) {
            context.top.active('view-container-channel');
            context.vms['view-container-channel'].init({mask: 'list-reaction'});
        }
        context.vms['list-reaction'].init();
    };
};

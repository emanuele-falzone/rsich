/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['view-container-leaderboard']) {
            context.top.active('view-container-leaderboard');
        }
        context.vms['view-container-leaderboard'].init();
    };
};

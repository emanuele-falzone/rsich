/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout');

exports.register = function () {
    require('./main-application').register();
    require('./c-view-container-channel').register();
    require('./c-view-container-home').register();
    require('./c-view-container-leaderboard').register();
    require('./c-view-container-prizes').register();
    require('./c-view-container-profile').register();
    require('./c-details-playing').register();
    require('./c-list-reaction').register();
    require('./c-list-answers').register();
    require('./c-details-question').register();
    require('./c-list-events').register();
    require('./c-list-channels').register();
    require('./c-list-leaderboard').register();
    require('./c-view-container-xor-premi').register();
    require('./c-details-user').register();
    require('./c-view-container-globale').register();
    require('./c-view-container-stagionale').register();
    require('./c-details-user-prizes').register();
    require('./c-list-prizes-global').register();
    require('./c-details-user-prizes-personal').register();
    require('./c-list-prizes-personal').register();
};

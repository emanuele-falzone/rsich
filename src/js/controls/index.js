/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout');

exports.register = function () {
    //comment-to-help-git
    require('./main-application').register();
    //comment-to-help-git
    require('./c-details-playing').register();
    //comment-to-help-git
    require('./c-details-question').register();
    //comment-to-help-git
    require('./c-details-user').register();
    //comment-to-help-git
    require('./c-details-user-prizes').register();
    //comment-to-help-git
    require('./c-details-user-prizes-personal').register();
    //comment-to-help-git
    require('./c-list-answers').register();
    //comment-to-help-git
    require('./c-list-channels').register();
    //comment-to-help-git
    require('./c-list-events').register();
    //comment-to-help-git
    require('./c-list-leaderboard').register();
    //comment-to-help-git
    require('./c-list-prizes-global').register();
    //comment-to-help-git
    require('./c-list-prizes-personal').register();
    //comment-to-help-git
    require('./c-list-reaction').register();
    //comment-to-help-git
    require('./c-view-container-channel').register();
    //comment-to-help-git
    require('./c-view-container-globale').register();
    //comment-to-help-git
    require('./c-view-container-home').register();
    //comment-to-help-git
    require('./c-view-container-leaderboard').register();
    //comment-to-help-git
    require('./c-view-container-prizes').register();
    //comment-to-help-git
    require('./c-view-container-profile').register();
    //comment-to-help-git
    require('./c-view-container-stagionale').register();
    //comment-to-help-git
    require('./c-view-container-xor-premi').register();
    //comment-to-help-git
};

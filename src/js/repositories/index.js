/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    return {
        //comment-to-help-git
        'answers': require('./answers').createRepository(options),
        //comment-to-help-git
        'channels': require('./channels').createRepository(options),
        //comment-to-help-git
        'covers': require('./covers').createRepository(options),
        //comment-to-help-git
        'events': require('./events').createRepository(options),
        //comment-to-help-git
        'leaderboard': require('./leaderboard').createRepository(options),
        //comment-to-help-git
        'prizes': require('./prizes').createRepository(options),
        //comment-to-help-git
        'questions': require('./questions').createRepository(options),
        //comment-to-help-git
        'reactions': require('./reactions').createRepository(options),
        //comment-to-help-git
        'users': require('./users').createRepository(options),
        //comment-to-help-git
    };
};

/*jslint node: true, nomen: true */
"use strict";

exports.createActions = function (options) {
    return {
        //comment-to-help-git
        'check-answer': require('./check-answer').createAction(options),
        //comment-to-help-git
        'get-related-question': require('./get-related-question').createAction(options),
        //comment-to-help-git
        'send-reaction': require('./send-reaction').createAction(options),
        //comment-to-help-git
        'update-personal-prizes': require('./update-personal-prizes').createAction(options),
        //comment-to-help-git
    };
};

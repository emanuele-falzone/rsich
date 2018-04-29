/*jslint node: true, nomen: true */
"use strict";

exports.createActions = function (options) {
    return {
        'check-answer': require('./check-answer').createAction(options)
        ,'get-related-question': require('./get-related-question').createAction(options)
        ,'send-reaction': require('./send-reaction').createAction(options)
        ,'update-personal-prizes': require('./update-personal-prizes').createAction(options)
    };
};

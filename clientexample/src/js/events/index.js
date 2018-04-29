/*jslint node: true, nomen: true */
"use strict";

exports.createEvents = function (options) {
    return {
        'answer-checked': require('./answer-checked').createEvent(options)
        ,'get-related-question-done': require('./get-related-question-done').createEvent(options)
        ,'reaction-sent': require('./reaction-sent').createEvent(options)
        ,'prizes-updated': require('./prizes-updated').createEvent(options)
        ,'go-to-prizes': require('./go-to-prizes').createEvent(options)
        ,'selected-reaction': require('./selected-reaction').createEvent(options)
        ,'selected-answer': require('./selected-answer').createEvent(options)
        ,'selected-channell': require('./selected-channell').createEvent(options)
        ,'event-leaderboard': require('./event-leaderboard').createEvent(options)
        ,'personal-prize-selected': require('./personal-prize-selected').createEvent(options)
    };
};

/*jslint node: true, nomen: true */
"use strict";

exports.createEvents = function (options) {
    return {
        //comment-to-help-git
        'answer-checked': require('./answer-checked').createEvent(options),
        //comment-to-help-git
        'event-leaderboard': require('./event-leaderboard').createEvent(options),
        //comment-to-help-git
        'get-related-question-done': require('./get-related-question-done').createEvent(options),
        //comment-to-help-git
        'go-to-prizes': require('./go-to-prizes').createEvent(options),
        //comment-to-help-git
        'personal-prize-selected': require('./personal-prize-selected').createEvent(options),
        //comment-to-help-git
        'prizes-updated': require('./prizes-updated').createEvent(options),
        //comment-to-help-git
        'reaction-sent': require('./reaction-sent').createEvent(options),
        //comment-to-help-git
        'selected-answer': require('./selected-answer').createEvent(options),
        //comment-to-help-git
        'selected-channell': require('./selected-channell').createEvent(options),
        //comment-to-help-git
        'selected-reaction': require('./selected-reaction').createEvent(options),
        //comment-to-help-git
    };
};

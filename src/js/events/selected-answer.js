/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
                'id' : data['id'],
            },
            promise = context.actions['check-answer']({filters: packet});
        context.runningActionsByContainer['view-container-channel'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['view-container-channel'].splice(
                context.runningActionsByContainer['view-container-channel'].indexOf(promise),
                1
            );
            if (result.event) {
                context.events[result.event](context, result.data);
            }
        });
    };
};

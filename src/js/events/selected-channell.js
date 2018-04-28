/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
                'name' : data['name'],
            },
            promise = context.actions['get-related-question']({filters: packet});
        context.runningActionsByContainer['view-container-home'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['view-container-home'].splice(
                context.runningActionsByContainer['view-container-home'].indexOf(promise),
                1
            );
            if (result.event) {
                context.events[result.event](context, result.data);
            }
        });
    };
};

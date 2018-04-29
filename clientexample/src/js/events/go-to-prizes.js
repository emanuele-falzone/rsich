/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['view-container-prizes']) {
            context.top.active('view-container-prizes');
            context.vms['view-container-prizes'].init({mask: 'view-container-xor-premi'});
        }
        if (!context.vms['view-container-globale']) {
            context.vms['view-container-xor-premi'].active('view-container-globale');
        }
        context.vms['view-container-globale'].init();
    };
};

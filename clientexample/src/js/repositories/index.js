/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    var repositories = {}
    repositories['covers'] = require('./covers').createRepository(options);
    repositories['reactions'] = require('./reactions').createRepository(options);
    repositories['answers'] = require('./answers').createRepository(options);
    repositories['questions'] = require('./questions').createRepository(options);
    repositories['events'] = require('./events').createRepository(options);
    repositories['channels'] = require('./channels').createRepository(options);
    repositories['leaderboard'] = require('./leaderboard').createRepository(options);
    repositories['users'] = require('./users').createRepository(options);
    repositories['prizes'] = require('./prizes').createRepository(options);
    return repositories;
};

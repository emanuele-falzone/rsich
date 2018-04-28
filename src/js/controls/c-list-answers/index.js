/*jslint node: true, nomen: true */
"use strict";

var $ = require('jquery'),
    ko = require('knockout'),
    Promise = require('bluebird');

function ViewModel(params) {
    var self = this;
    self._repository = params.context.repositories['answers'];
    self.context = params.context;
    self.status = ko.observable('');
    self.selected = ko.observable(undefined);
    self.items = ko.observableArray([]);

    self.select = function () {
        self.selected(this.id);
        self.output = this;
        self.trigger.call(this, 'selected-answer');
    };

    self.trigger = function (id) {
        self.context.events[id](self.context, this);
    };
}

ViewModel.prototype.id = 'list-answers';

ViewModel.prototype.fields = {
    id: 1,
    'text': 1,
};

ViewModel.prototype.waitForStatusChange = function () {
    return this._propagating ||
           this._computing ||
           this._initializing ||
           Promise.resolve();
};

ViewModel.prototype._compute = function () {
    if (this._propagating) {
        this._propagating.cancel();
    }
    if (this._computing) {
        this._computing.cancel();
    }
    var self = this;
    this._computing = this._repository.find(this.filters, this.fields).then(function (items) {
        self.selected(undefined);
        self.items(items);
        if (items.length) {
            self.selected(items[0].id);
            self.output = items[0];
        }
        $('.collapsible').collapsible();
        self.status('computed');
        self._computing = undefined;
    });
};

ViewModel.prototype._allComputed = function () {
    if (!this.context.vms['details-question'] || this.context.vms['details-question'].status() !== 'computed') {
        return false;
    }
    return true;
};

ViewModel.prototype._firstNotReady = function () {
    if (!this.context.vms['details-question']) {
        return Promise.reject();
    }
    if (this.context.vms['details-question'].status() !== 'computed') {
        return this.context.vms['details-question'].waitForStatusChange();
    }
    return Promise.resolve();
};

ViewModel.prototype._waitForDependencies = function () {
    if (this._allComputed()) {
        return Promise.resolve();
    }
    var self = this;
    return this._firstNotReady().then(function () {
        return self._waitForDependencies();
    });
};

ViewModel.prototype._propagate = function () {
    if (this._propagating) {
        this._propagating.cancel();
    }
    if (this._computing) {
        this._computing.cancel();
    }
    var self = this;
    this._propagating = this._waitForDependencies().then(function () {
        self.filters['id_question'] = self.filters['id_question'] || (
            self.context.vms['details-question'].output &&
            self.context.vms['details-question'].output['id']
        );
        self.status('ready');
        self._propagating = undefined;
        self._compute();
    });
};

ViewModel.prototype.init = function (options) {
    options = options || {};
    this.output = undefined;
    this.filters = options.input || {};
    this.status('clear');
    var self = this;
    this._initializing = new Promise(function (resolve) {
        setTimeout(function () {
            self._propagate();
            resolve();
            self._initializing = undefined;
        }, 1);
    });
};

exports.register = function () {
    ko.components.register('c-list-answers', {
        viewModel: {
            createViewModel: function (params, componentInfo) {
                var vm = new ViewModel(params);
                params.context.vms[vm.id] = vm;
                ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function () { delete params.context.vms[vm.id]; });
                return vm;
            }
        },
        template: require('./index.html'),
        synchronous: true
    });
};

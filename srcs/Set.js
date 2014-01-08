'use strict';

function Set() {
    this.data = {};
};

Set.prototype.add = function(e) {
    var data = this.data;
    if (!(e in data)) {
        data[e] = true;
    }
};

/**
 *
 * @param {Array}
 */
Set.prototype.addAll = function(c) {
    console.log('Not implemented!');
};

Set.prototype.clear = function() {
    this.data = {};
};

Set.prototype.contains = function(e) {
    return (e in this.data);
};

Set.prototype.isEmpty = function() {
    return Object.keys(this.data).length == 0;
};

Set.prototype.remove = function(e) {
    delete this.data[e];
};

Set.prototype.size = function() {
    return Object.keys(this.data).length;
};

Set.prototype.toString = function() {
    return JSON.stringify(this.data);
};

Set.prototype.toArray = function() {
    var data = this.data
    , arr = []
    , key;
    for (key in data) {
        arr.push(key);
    }
    return arr;
};

module.exports = Set;

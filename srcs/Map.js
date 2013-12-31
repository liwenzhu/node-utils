'use strict';

function Map() {
    this.size = 0;
    this.data = {};
};

/**
 * @api public
 */
Map.prototype.put = function(key, value) {
    this.size++;
    this.data[key] = value;
};

/**
 * @api public
 */
Map.prototype.get = function(key) {
    return this.data[key];
};

/**
 * @api public
 */
Map.prototype.remove = function(key) {
    delete this.data[key];
};

/**
 * @api public
 */
Map.prototype.contains = function(key) {
    return !!this.data.hasOwnProperty(key);
};

/**
 * @api public
 */
Map.prototype.size = function() {
    return this.size;
};

/**
 * @api public
 */
Map.prototype.clear = function(key) {
    this.size = 0;
    this.data = {};
};

module.exports = Map;
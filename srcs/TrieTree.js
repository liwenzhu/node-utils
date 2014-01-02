'use strict';

function TrieTree(key, bound) {

};

/**
 * @param {Charactor} key a charactor of a word.
 * @param {Boolean} bound if the node is the end of a word.
 */
function TrieTreeNode(key, bound) {
    var node = this.node = {};
    node.key = key;
    node.bound = bound;

};

/**
 * @api public
 */
TrieTree.prototype.build = function(file) {
};

/**
 * @api public
 */
TrieTree.prototype.lookup = function(word) {
};

module.exports = TrieTree;
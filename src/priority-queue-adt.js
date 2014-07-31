(function() {
    'use strict';
    var PriorityQueue = {};

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return PriorityQueue;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = PriorityQueue;
    } else {
        window.PriorityQueue = PriorityQueue;
    }
})();

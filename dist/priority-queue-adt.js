/*!
* priority-queue-adt
* v0.0.0 - 2014-08-06
* https://github.com/pasangsherpa/priority-queue-adt
* (c) Pasang Sherpa <pgyalzen@gmail.com> (https://github.com/pasangsherpa)
* MIT License
*/
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

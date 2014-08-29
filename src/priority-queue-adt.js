(function() {
    'use strict';
    var PriorityQueue = function() {
    	var count = 0;

    	function add() {

    	}

    	function remove() {

    	}

    	function contains() {

    	}

    	function getRoot() {

    	}

    	function isEmpty() {
    		return count === 0;
    	}

    	function size() {
    		return count;
    	}

    	return {
    		add: add,
    		remove: remove,
    		contains: contains,
    		getRoot: getRoot,
    		isEmpty: isEmpty,
    		size: size
    	}
    }

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

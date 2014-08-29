/*global describe, it */
'use strict';
var assert = require('assert');
var PriorityQueue = require('../src/priority-queue-adt.js');

var pq = new PriorityQueue();

describe('PriorityQueue operations test', function () {
	it('should create an empty priority-queue in the beginning', function(){
		assert.equal(pq.isEmpty(), true);
		assert.equal(pq.size(), 0);
	});
});

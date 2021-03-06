# priority-queue-adt [![Build Status](https://travis-ci.org/pasangsherpa/priority-queue-adt.svg?branch=master)](https://travis-ci.org/pasangsherpa/priority-queue-adt)

> PriorityQueue ADT for browser and nodejs

The **PriorityQueue** class represents an abstract data type which is like a regular queue or stack data structure, but where additionally each element has a "priority" associated with it. In the **PriorityQueue**, an element with high priority is served before an element with low priority. It supports the usual *insert* and *remove* operations, along with methods for examining the front of the queue, testing if the queue is empty, and iterating through the items.


## Install

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/pasangsherpa/priority-queue-adt/master/dist/priority-queue-adt.min.js
[max]: https://raw.githubusercontent.com/pasangsherpa/priority-queue-adt/master/dist/priority-queue-adt.js

```sh
$ npm install --save priority-queue-adt
```

```sh
$ bower install --save priority-queue-adt
```


## Usage

```js
var PriorityQueue = require('priority-queue-adt');
var priorityQueue = new PriorityQueue();

```
```js
<script type="text/javascript" src="https://raw.githubusercontent.com/pasangsherpa/priority-queue-adt/master/dist/priority-queue-adt.min.js"></script>
<script type="text/javascript"> 
  var priorityQueue = new PriorityQueue();

</script>
```


## Documentation

### PriorityQueue()

Creates an empty priority queue with infinite capacity.


### PriorityQueue(options)

Creates an empty priority queue with the given options.

#### options

Type: `Object`

the desired options for the queue.

#####Possible options parameters. All options are optional. 

##### comparator

Type: `function`

comparator function to use to order the elements in the queue. 

Default: `function(a,b) { return a > b; }`

##### initialCapacity

Type: `int`

initialCapacity represents the specified capacity.

Default: `Infinity`

##### keys

Type: `Array`

initial elements.

Default: `[]`

#####Example
```js
var priorityQueue = new PriorityQueue({
	comparator: function(a, b){ return a > b; },
	initialCapacity: 100,
	keys: [1,2,3,4,5]
});
```


### Methods

#### .insert(element) `throws "PriorityQueue is full" error`

Insert an element to the rear of the queue and returns the new size of the queue.

##### element

Type: `object`

the element to be added to the queue.

#### .remove() `throws "PriorityQueue is empty" error` 

Removes an element from the front of the queue and returns the element.

Type: `object`

the element removed from the front of the queue.

#### .first() `throws "PriorityQueue is empty" error` 

Returns without removing the element at the front of the queue.

Type: `object`

the element at the front of the queue.

#### .isEmpty()

Returns true if this queue contains no elements.

Type: `boolean`

whether or not the queue is empty.

#### .size()

Returns the number of elements in the queue.

Type: `int`

the number of element in the queue.

#### .empty() 

Removes all element from the the queue and returns the new size of the queue.

#### .iterator

Returns an iterator to the queue that iterates through the items.

Type: `object`

the iterator object of the queue

#### .iterator.next() `throws "No such element" error` 

Returns the next item.

#### .iterator.hasNext()

Returns whether the queue has next item.


## License

[MIT](http://opensource.org/licenses/MIT) © [Pasang Sherpa](https://github.com/pasangsherpa)

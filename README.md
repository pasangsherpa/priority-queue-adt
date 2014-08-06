# priority-queue-adt [![Build Status](https://travis-ci.org/pasangsherpa/priority-queue-adt.svg?branch=master)](https://travis-ci.org/pasangsherpa/priority-queue-adt)

> PriorityQueue ADT for browser and nodejs


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
var priority-queue = new PriorityQueue();


```
```js
<script type="text/javascript" src="https://raw.githubusercontent.com/pasangsherpa/priority-queue-adt/master/dist/priority-queue-adt.min.js"></script>
<script type="text/javascript"> 
  var priority-queue = new PriorityQueue();

</script>
```


## Documentation

### PriorityQueue()

Creates an empty priority-queue with infinite capacity.

### PriorityQueue(initialCapacity)

Creates an empty priority-queue using the specified capacity.

#### initialCapacity

Type: `int`

initialCapacity represents the specified capacity.


### Methods

#### .enqueue(element) `throws "PriorityQueue is full" error`

Adds an element to the rear of the priority-queue and returns the new size of the priority-queue.

##### element

Type: `object`

the element to be added to the priority-queue.

#### .dequeue() `throws "PriorityQueue is empty" error` 

Removes an element from the front of the priority-queue and returns the element.

Type: `object`

the element removed from the front of the priority-queue.

#### .first() `throws "PriorityQueue is empty" error` 

Returns without removing the element at the front of the priority-queue.

Type: `object`

the element at the front of the priority-queue.

#### .isEmpty()

Returns true if this priority-queue contains no elements.

Type: `boolean`

whether or not the priority-queue is empty.

#### .size()

Returns the number of elements in the priority-queue.

Type: `int`

the number of element in the priority-queue.

#### .empty() 

Removes all element from the the priority-queue and returns the new size of the priority-queue.

#### .iterator

Returns an iterator to the priority-queue that iterates through the items in FIFO order.

Type: `object`

the iterator object of the priority-queue

#### .iterator.next() `throws "No such element" error` 

Returns the next item in FIFO order.

#### .iterator.hasNext()

Returns whether the priority-queue has next item in FIFO order.


## License

[MIT](http://opensource.org/licenses/MIT) © [Pasang Sherpa](https://github.com/pasangsherpa)

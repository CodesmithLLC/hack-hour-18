'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  this.events[funcName] = func;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.events[funcName](...args);
};

// const instance = new EventEmitter();
// let counter = 0;
// instance.on('increment', function() {
//   counter++;
// })
//
// instance.on('add', function(num1, num2, num3) {
//   counter = counter + num1 + num2 + num3
// })
//
// instance.trigger('increment', 1, 2, 3);
// instance.trigger('add', 2,3,5);
// console.log(counter);

module.exports = EventEmitter;

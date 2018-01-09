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
  this.eventStorage = [];
  this.funcStorage = [];
}

EventEmitter.prototype.on = function(funcName, func) {
  this.eventStorage.push(funcName);
  this.funcStorage.push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.eventStorage.forEach((func, index) => {
    if (func === funcName) this.funcStorage[index](...args);
  });
};

// var instance = new EventEmitter();
// var counter = 0;
// instance.on('add', function(num) {
//   counter += num;
// }); // counter should be 0
// instance.trigger('add', 5); // counter should be 1
// instance.trigger('add', 8); // counter should be 2
// console.log(counter);
module.exports = EventEmitter;

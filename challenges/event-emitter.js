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
  if (this.events[funcName]) {
    this.events[funcName].push(func);
  } else {
    this.events[funcName] = [func];
  }
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.events[funcName].forEach(func => func.apply(this, args));
};

/**
 * vvv Below be tests vvv
 */

// const e = new EventEmitter();
// let counter = 0;
// e.on('increment', function() {
//   counter++;
// });
// e.on('increment', function() {
//   counter++;
// });
// console.log(e);
// e.trigger('increment');
// console.log(counter); // --> 2
// e.trigger('increment');
// console.log(counter); // --> 4
// e.trigger('increment');
// console.log(counter); // --> 6

module.exports = EventEmitter;

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
  // event store
  this.events = {};
}

EventEmitter.prototype.on = function (funcName, func) {
  // if function hasn't been added to store, create an array
  if (!this.events[funcName]) this.events[funcName] = [];
  // push functionality to event store as key value pair
  this.events[funcName].push(func);
};

EventEmitter.prototype.trigger = function (funcName, ...args) {
  const event = this.events[funcName];
  if (event) {
    event.forEach((f) => {
      f.call(null, args);
    });
  }
};

const instance = new EventEmitter();
let counter = 0;
instance.on('increment', () => {
  counter += 1;
}); // counter should be 0
console.log(`first counter: ${counter}`);
instance.trigger('increment'); // counter should be 1
console.log(`second counter: ${counter}`);
instance.trigger('increment'); // counter should be 2
console.log(`third counter: ${counter}`);

module.exports = EventEmitter;

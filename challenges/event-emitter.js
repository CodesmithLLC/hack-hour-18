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
<<<<<<< HEAD
  this.store = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  this.store[funcName] = func;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  for (const name in this.store) {
    if (funcName === name) {
      let storedFunc = this.store[name];
      storedFunc(...args);
    }
  }
=======

}

EventEmitter.prototype.on = function(funcName, func) {

};

EventEmitter.prototype.trigger = function(funcName, ...args) {

>>>>>>> f1ee80825a2379cc2cd748b21b96f40164829bbf
};

module.exports = EventEmitter;

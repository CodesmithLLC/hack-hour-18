/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
  this.max = null;
}

Stack.prototype.findNewMax = function() {
  this.max = null;
  for (key in this.storage) {
    if (this.storage[key] > this.max || this.max === null) {
      this.max = this.storage[key];
    }
  }
}

Stack.prototype.push = function(val) {
  if (Array.isArray(val)) {
    val.forEach(item => {
			this.storage[this.length] = item;
			this.length++;
			if (item > this.max || this.max === null) {
        this.max = item;
      }
    });
    
  } else {
    this.storage[this.length] = val;
    this.length++;
    if (val > this.max || this.max === null) {
      this.max = val;
    }
  }
  return this.length;
}

Stack.prototype.pop = function() {
  const val = this.storage[--this.length];
  delete this.storage[this.length];
  if (val === this.max) {
    this.findNewMax();
  }
  return val;
}

Stack.prototype.getMax = function() {
  return this.max;
}

module.exports = Stack;
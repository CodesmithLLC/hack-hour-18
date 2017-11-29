/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  // solution using array
  // const body = [];

  // this.push = (val) => {
  //   body.push(val);
  //   return body.length;
  // }

  // this.pop = () => {
  //   return body.pop();
  // }

  // this.getMax = () => {
  //   let temp = body[0];
  //   for (let i = 0; i < body.length; i += 1) {
  //     if (body[i] > temp) temp = body[i];
  //   }
  //   return temp;
  // }

  // solution using object
  const body = {};
  let index = 0;
  let length = 0;

  this.push = (val) => {
    body[index] = val;
    index += 1;
    length += 1;
    return length;
  }

  this.pop = () => {
    const output = body[index - 1];

    delete body[index - 1];
    index -= 1;
    length -= 1;
    return output;
  }

  this.getMax = () => {
    let temp = body[0];

    for (let i = 0; i < length; i += 1) {
      if (body[i] > temp) temp = body[i];
    }
    return temp;
  }
}

module.exports = Stack;
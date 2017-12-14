/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let val1 = l1;
  let val2 = l2;
  let arr = [];
  while (val1 || val2) {
    let value1 = val1 === null ? 0 : val1.value;
    let value2 = val2 === null ? 0 : val2.value;
    arr.push(value1 + value2);
    val1 = val1 ? val1.next : null;
    val2 = val2 ? val2.next : null;
  }
  let newArr = arr;
  // console.log(newArr);
  let ourArr = arr.map((element, i) => {
    if (newArr[i] >= 10){
      if (newArr[i - 1] >= 10) return newArr[i] - 10 + 1;
      return newArr[i] - 10;
    } 
    if (newArr[i - 1] >= 10){
      if (element + 1 >= 10) {
        newArr[i] = element + 1;
        return element + 1 - 10;
      }
      else return element + 1
    }
    
    return element;
  });
  if (newArr[newArr.length-1] >= 10){
    ourArr.push(1);
  };
  // console.log(ourArr);
  let initializeNode = new Node(ourArr[0]);
  let returnNode = initializeNode;
  for (let i = 1; i < ourArr.length; i++) {
    returnNode.next = new Node(ourArr[i]);
    returnNode = returnNode.next;
  }
  return initializeNode;
}

// it('should handle very large numbers', function() {
//   expect(addLinkedList(makeNum(9 034 543 252 345), makeNum(345 623 453 245))).to.eql(makeNum(938 016 670 559 0));
// }, ['large input']);
// after(() => {
//   report();

// let list = '432523454309'.split('');
// let node1 = new Node(5);
// let temp = node1;
// list.forEach(element => {
//   temp.next = new Node(parseInt(element));
//   temp = temp.next;
// });

// let list2 = '42354326543'.split('');
// let node2 = new Node(5);
// let temp2 = node2;
// list2.forEach(element => {
//   temp2.next = new Node(parseInt(element));
//   temp2 = temp2.next;
// });

// console.log(addLinkedList(node1,node2));

newPromise = ((x) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(x), 1000);
  })
});

async function buddo(x){
  let a = 1;
  a = await newPromise(4);
  return x + a;
}

buddo(3).then(ele => {console.log(ele)});


module.exports = {Node: Node, addLinkedList: addLinkedList};

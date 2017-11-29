/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */


function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) { // I like this solution, but prob could be shorter
  if(l1 === undefined) return l2;
  if(l2 === undefined) return l1;

  let outputList = new Node(l1.value)
  const head = outputList;

  let currentNodeL1 = l1.next;
  let currentNodeL2 = l2;

  while(currentNodeL1 || currentNodeL2){ 
    if(currentNodeL2){
      outputList.next = new Node(currentNodeL2.value);
      currentNodeL2 = currentNodeL2.next;
      outputList = outputList.next;
    }
    if(currentNodeL1){
      outputList.next = new Node(currentNodeL1.value);
      currentNodeL1 = currentNodeL1.next;
      outputList = outputList.next;
    }
    
  }
  return head;

};

// module.exports = {Node: Node, zip: zip};



const one = new Node(1);
const three = new Node(1);
const five = new Node(1);
const seven = new Node(1);

const two = new Node(2);
const four = new Node(2);
const six = new Node(2);
const eight = new Node(2);

one.next = three;
one.next.next = five;
one.next.next.next = seven;

two.next = four;
two.next.next = six;
two.next.next.next = eight;

console.log(JSON.stringify(zip(one, two)));
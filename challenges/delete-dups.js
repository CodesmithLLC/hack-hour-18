/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



function deleteDups(head) {

    var checkNode;
    var countNode = head;
    var currentNode = head;
    var loopNode = head;
    var leng = 0;

    for( var i = 0; i < countNode; i++){
      checkNode = currentNode
      for(var j = 0; j < countNode; j++){
        console.log(loopNode.value, checkNode.value)
        if(loopNode.value === checkNode.value && loopNode.next === checkNode.next){console.log('hello')}
        loopNode = loopNode.next
      }
      currentNode = currentNode.next;
    }
    }

module.exports = deleteDups;

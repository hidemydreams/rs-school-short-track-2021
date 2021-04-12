/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
const ListNode = require('../extensions/list-node');

function removeKFromList(l, k) {
  let res = null;
  let nodeList = l;
  const array = [];
  do {
    if (nodeList.value !== k) {
      array.push(nodeList.value);
    }
    nodeList = nodeList.next;
  } while (nodeList !== null);

  for (let i = array.length - 1; i >= 0; i--) {
    const node = new ListNode();
    node.value = array[i];
    node.next = res;

    res = node;
  }

  return res;
}

module.exports = removeKFromList;

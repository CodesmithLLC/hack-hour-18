/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2:
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  for (let i = 0; i < jazbook.length; i++) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  return false;
}

// return an object literal representing the jazbook
function Phonebook(jazbook) {
  for (let i = 0; i < jazbook.length; i++) {
    const name = jazbook[i][0];
    const number = jazbook[i][1];
    this[name] = number;
  }
}

function makePhoneBookObject(jazbook) {
  return new Phonebook(jazbook);
}

Phonebook.prototype.add = function (name, number) {
  this[name] = number;
};

Phonebook.prototype.remove = function (name) {
  if (this[name]) {
    delete this[name];
    return name;
  } return false;
};

Phonebook.prototype.lookup = function (name) {
  if (this[name]) return this[name];
  return false;
};

const book = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];

// const pb = new Phonebook(book);
// console.log(pb.remove('travis'));
// console.log(pb.lookup(''));
// const pb = makePhoneBookObject(book);
// pb.add('andrew','fuckandrew');
// console.log(pb);

const objectToExport = {
  findName,
  Phonebook,
};

module.exports = objectToExport;

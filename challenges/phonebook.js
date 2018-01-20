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
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];
//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  // loop through the length of jazbook
  for (let i = 0; i < jazbook.length; i += 1) {
    // if the value of the subarray at index 0 equals the name passed in to findName,
    // return the value at index 1
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  // else return false
  return false;
}
console.log(findName(jazbook, 'travis'));
console.log(findName(jazbook, 'mike'));

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  // create an empty phonebook object
  const phonebook = {};
  // iterate through the jazbook array
  for (let i = 0; i < jazbook.length; i += 1) {
    // set each value at index 0 in subarray as the key in a new phonebook object
    // set each value at index 1 in subarray as the value of the new key in the phonebook object
    phonebook[jazbook[i][0]] = jazbook[i][1];
  }

  // once the phonebook has all the values from jazbook, return it
  return phonebook;
}

const objJazbook = makePhoneBookObject(jazbook);

class Phonebook {
  constructor(phonebook) {
    this.phonebook = phonebook;
  }

  addContact(name, number) {
    console.log(`++ adding ${name}: ${number} ++`);
    this.phonebook[name] = number;
  }

  findContact(name) {
    if (this.phonebook.hasOwnProperty(name)) return this.phonebook[name];
    return false;
  }

  removeContact(name) {
    console.log(`-- removing ${name}: ${this.phonebook[name]} --`);
    delete this.phonebook[name];
  }
}

const newJazbook = new Phonebook(objJazbook);

console.log(`newJazbook: ${JSON.stringify(newJazbook, null, 2)}`);
newJazbook.addContact('mike', '301-351-9469');
console.log(`newJazbook: ${JSON.stringify(newJazbook, null, 2)}`);
console.log(`newJazbook.findContact('mike'): ${newJazbook.findContact('mike')}`);
console.log(`newJazbook.findContact('tom'): ${newJazbook.findContact('tom')}`);
newJazbook.removeContact('david');
console.log(`newJazbook: ${JSON.stringify(newJazbook, null, 2)}`);

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;

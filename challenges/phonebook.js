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

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  let result = null;
  jazbook.forEach(entry => {
    if (entry[0] === name) result = entry[1];
  });
  return result ? result : false;
}

// test
// const jazzybook = [
//   ['alex','301-844-3421'],
//   ['jae','301-844-1211'],
//   ['david','301-844-0978'],
//   ['travis','301-844-8505'],
//   ['jasmine','1800-974-4539'],
// ];

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  const phoneBook = {};
  jazbook.forEach((entry) => {
    phoneBook[entry[0]] = entry[1];
  });
  phoneBook.add = function(entry) {
    phoneBook[entry[0]] = entry[1];
  }
  phoneBook.lookup = function(name) {
    return phoneBook[name];
  }
  phoneBook.remove = function(name) {
    delete phoneBook[name];
  }
  return phoneBook;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;

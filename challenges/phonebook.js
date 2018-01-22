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

let jazbook = [
  ['alex','301-844-3421'],
  ['jae','301-844-1211'],
  ['david','301-844-0978'],
  ['travis','301-844-8505'],
  ['jasmine','1800-974-4539'],
];

var count = 0;


function findName(jazbook, name) {
if(!Array.isArray(jazbook) || jazbook.length === 0) return;
for(let i=0; i < jazbook.length;i++){
 if(jazbook[i][0] === name) return jazbook[i][1]
}
}

function makePhoneBookObject(jazbook){
 if(!Array.isArray(jazbook) || jazbook.length === 0) return;
 let phoneBook = {};
 for(let j=0; j < jazbook.length;j++){
   phoneBook[jazbook[j][0]] = jazbook[j][1]
 }

 phoneBook.add = function(name,number){
   
   if(!phoneBook.hasOwnProperty(name)){
     phoneBook[name] = number;
   } else {
     phoneBook[name + count] = number;
     count++
   }
 };

 phoneBook.lookup = function(name) {
   for(let key in phoneBook){
     if(key === name) return key + ":  " + phoneBook[key];
   }
   console.log('Person not found.');
 }
 
 phoneBook.remove = function(name){
   for(let key in phoneBook){
     if(key === name) {
       delete phoneBook[key];
       return name + " has been removed."
     }
   }
   console.log('Can not remove. Person not found.')
 }
return phoneBook;
}

let book1 = makePhoneBookObject(jazbook);
book1.add('aaron','760-567-3375')
book1.lookup('alex');
book1.remove('alex');

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;

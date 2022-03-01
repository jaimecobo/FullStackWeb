"use strict";
class Entry {
    constructor(fName, lName, bDay) {
        this.firstName = fName;
        this.lastName = lName;
        this.birthday = bDay;
    }
}
let newPerson = new Entry('Albert', 'Einstein', new Date('05/14/1879'));
console.log("First Name: " + newPerson.firstName + ", Last Name: " + newPerson.lastName + ", Birthday: " + newPerson.birthday);
let numbers = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];
function sortArray(argument) {
    return argument.sort();
}
console.log("Array before soerting: " + numbers);
console.log("Array after sorting: " + sortArray(numbers));

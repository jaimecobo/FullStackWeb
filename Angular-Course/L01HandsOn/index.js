"use strict";
class contactCard {
    constructor(fName, lName, pNumber, email) {
        this.firstName = fName;
        this.lastName = lName;
        this.phoneNumber = pNumber;
        this.email = email;
    }
    sendMessage() {
        console.log('Name: ' + this.firstName + ', Phone Number: ' + this.phoneNumber);
    }
}
let newPerson = new contactCard('Henry', '', 123456789, '');
newPerson.sendMessage();

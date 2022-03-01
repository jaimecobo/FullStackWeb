interface Person {
    firstName: string;
    lastName: string;
}

interface Contact {
    phoneNumber: number;
    email: string;
}

class contactCard implements Person, Contact {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;

    constructor(fName:string, lName: string, pNumber: number, email:string){
        this.firstName = fName;
        this.lastName = lName;
        this.phoneNumber = pNumber;
        this.email = email;
    }

    sendMessage(): void{
        console.log('Name: ' + this.firstName + ', Phone Number: ' + this.phoneNumber);
    }
}

let newPerson = new contactCard('Henry', '', 123456789, '');
newPerson.sendMessage();
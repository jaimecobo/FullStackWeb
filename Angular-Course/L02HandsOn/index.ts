interface Person {
    firstName: string;
    lastName: string;
    birthday: Date;
    }

class Entry implements Person{
    firstName: string;
    lastName: string;
    birthday: Date;

    constructor(fName:string, lName: string, bDay: Date){
        this.firstName = fName;
        this.lastName = lName;
        this.birthday = bDay;
    }
}

let newPerson = new Entry('Albert', 'Einstein', new Date('05/14/1879'));

console.log("First Name: " + newPerson.firstName + ", Last Name: " + newPerson.lastName + ", Birthday: " + newPerson.birthday);

let numbers: string[]  = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];

function sortArray<S>(argument: S[]): S[] {
    return argument.sort();
}

console.log("Array before soerting: " + numbers);
console.log("Array after sorting: " + sortArray(numbers));
const somethingFun: string = "Riding my bike is fun!";
console.log(somethingFun);
// ##########################################################################################################

const sandwich: string ='BLT';
const orderNumber: number = 1738;
const delicious: boolean = true;

function orderFood01(sandwich: string, orderNumber: number) {
    console.log('Your order number is ' + orderNumber + ' and contains a ' + sandwich + ' sandwich.');
}

orderFood01('Ham & Cheese', 32);

function orderFood02(sandwich: string, orderNumber: number): void {
    console.log('Your order number is ' + orderNumber + ' and contains a ' + sandwich + ' sandwich.');
}

orderFood01('Bacon, Egg & Cheese', 67);

function orderFood03(sandwich: string, orderNumber: number): number {
    return orderNumber;
}

console.log('Your order number is ' + orderFood03('Cheese', 24));
// ##########################################################################################################

function multiplyValues(value1: number, value2: number){
    console.log(value1 * value2)
}

multiplyValues(8, 7);
// ##########################################################################################################

const age: number = 32;
const ageAsString: string = age.toString();

const gretting: string = 'Hello, my age is ' + ageAsString + '.';

console.log(gretting)
// ##########################################################################################################

const age01: string = "55";

const age01AsNumber: number = parseInt(age01);

const numberCalculation = age01AsNumber * 10;

console.log(numberCalculation);
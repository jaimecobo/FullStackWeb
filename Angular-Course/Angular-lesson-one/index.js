"use strict";
const somethingFun = "Riding my bike is fun!";
console.log(somethingFun);
// ##########################################################################################################
const sandwich = 'BLT';
const orderNumber = 1738;
const delicious = true;
function orderFood01(sandwich, orderNumber) {
    console.log('Your order number is ' + orderNumber + ' and contains a ' + sandwich + ' sandwich.');
}
orderFood01('Ham & Cheese', 32);
function orderFood02(sandwich, orderNumber) {
    console.log('Your order number is ' + orderNumber + ' and contains a ' + sandwich + ' sandwich.');
}
orderFood01('Bacon, Egg & Cheese', 67);
function orderFood03(sandwich, orderNumber) {
    return orderNumber;
}
console.log('Your order number is ' + orderFood03('Cheese', 24));
// ##########################################################################################################
function multiplyValues(value1, value2) {
    console.log(value1 * value2);
}
multiplyValues(8, 7);
// ##########################################################################################################
const age = 32;
const ageAsString = age.toString();
const gretting = 'Hello, my age is ' + ageAsString + '.';
console.log(gretting);
// ##########################################################################################################
const age01 = "55";
const age01AsNumber = parseInt(age01);
const numberCalculation = age01AsNumber * 10;
console.log(numberCalculation);

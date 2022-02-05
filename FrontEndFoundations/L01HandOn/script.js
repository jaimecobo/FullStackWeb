function numberChecking(number1, number2){
    if(number1 > 100){
        console.log("Number1 has many digits!");
    }
    if(number1 < 0){
        console.log("Number1 is a negative number");
    }
    if(number2 < 20){
        console.log("Number2 is not a very high number");
    }
    if(number2 > 50){
        console.log("Number2 is a high number");
    }
}

console.log("number1 = 110 & number2 = 60 results in: ");
numberChecking(110, 60)
console.log("----------------------------------------");
console.log("number1 = -1 & number2 = 19.9 results in: ");
numberChecking(-1, 19.9);
console.log("----------------------------------------");
console.log("number1 = 1 & number2 = 49 results in: ");
numberChecking(1, 49);
console.log("----------------------------------------");
console.log("number1 = 100 & number2 = 50 results in: ");
numberChecking(100, 50);
console.log("----------------------------------------");


var idealCar = {
    name: "mustang",
    color: "red",
    weightInPounds: 3600,
    myCar: function(){
        console.log("My ideal car is a " + this.name + " with a color of " + this.color + 
        ", but I do not want it to be over " + this.weightInPounds + " pounds.");
    }
};
idealCar.myCar();
const defaultParam = (a, b=10) => a * b;
console.log(defaultParam(3));

let highSchoolGrade = 8;
let yourGrade;

function updateGrade(){
  switch (highSchoolGrade) {
    case(9):
      yourGrade = "Freshman";
      break;
    case(10):
      yourGrade = "Sophomore";
      break;
    case(11):
      yourGrade = "Junior";
      break;
    case(12):
      yourGrade = "Senior";
      break;
    default:
        yourGrade = "Invalid";
  }
  
}

function name(){
    let firstName = "John" 
    const output = firstName === "John" ? document.getElementById("demo").innerHTML = "Hello John!" : document.getElementById("demo").innerHTML = "Hello Human!";
  }

updateGrade();
name();
console.log(yourGrade);
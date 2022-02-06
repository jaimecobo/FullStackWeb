class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }

class Manager extends Employee{
    constructor(name, salary, hireDate, descriptionOfJob){
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }

    jobDescription(){
        console.log(this.name + " was hired on " + this.hireDate  + " and makes " + this.salary + " because " + this.descriptionOfJob);
        document.getElementById('manager').innerHTML = this.name + " was hired on " + this.hireDate  + " and makes " + this.salary + " because " + this.descriptionOfJob;
    }
}


class Designer extends Employee{
    constructor(name, salary, hireDate, experience){
        super(name, salary, hireDate);
        this.experience = experience;
    }

    yearsExperience(){
        console.log(this.name + " was hired on " + this.hireDate  + " and makes " + this.salary + " because " + this.experience);
        document.getElementById('designer').innerHTML = this.name + " was hired on " + this.hireDate  + " and makes " + this.salary + " because " + this.experience;
    }
}

class SalesAssociate extends Employee{
    constructor(name, salary, hireDate, degrees){
        super(name, salary, hireDate);
        this.degrees = degrees;
    }

    degreeCompleted(){
        console.log(this.name + " was hired on " + this.hireDate  + " and makes " + this.salary + " because " + this.degrees);
        document.getElementById('sales').innerHTML = this.name + " was hired on " + this.hireDate  + " and makes " + this.salary + " because " + this.degrees;
    }
}

let Donna = new Manager("Donna", 80000, "3/22/17", "she manage sales staff!");
let Jin =  new Designer("Jin", 75000, "4/14/18", "she designs all of our products!");
let Anna = new SalesAssociate("Anna", 80000, "5/5/18", "she sold a record amount of products consecutively each year since hired!")
Donna.jobDescription();
Jin.yearsExperience();
Anna.degreeCompleted();



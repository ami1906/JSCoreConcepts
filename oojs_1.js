// ES6
class Employee
{
   constructor(firstName,lastName){
     this.firstName = firstName;
     this.lastName = lastName;
   }

   printName(){
     console.log(this.firstName+ " " + this.lastName);
   }
}

var emp1 = new Employee("Amarnath","Krishnan");
emp1.printName();

// ES5
function Employee(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.printStudentInfo = function(){
    console.log(this.firstName+ " " + this.lastName);
  }
}

var emp1 = new Employee("Amarnath","Krishnan");
emp1.printStudentInfo();

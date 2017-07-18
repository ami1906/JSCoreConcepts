var student1 = {
  firstName: 'Amarnath',
  lastName: 'Krishnan'
};
var student2 = {
  firstName: 'Hari',
  lastName: 'Ganesh'
}
var student3 = {
  firstName: "Student",
  lastName: "Three"
}

function printStudentInfo(){
  console.log((this.firstName || 'Dummy') + " " + (this.lastName || 'Student'));
}

printStudentInfo();

var studentInfo = printStudentInfo.bind(student1);
studentInfo();

printStudentInfo.call(student2);

printStudentInfo.apply(student3);

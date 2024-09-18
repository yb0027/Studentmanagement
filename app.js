angular.module('studentApp', [])

  .controller('StudentController', function () {
    var self = this;

    // initialize empty student object and student list array
    self.newStudent = {};
    self.studentList = [];

    // function to add a new student to the list
    self.addStudent = function (studentForm) {
      // validate form inputs
      if (studentForm.$valid) { // validation occurs here
        self.studentList.push(self.newStudent);
        self.newStudent = {};
        studentForm.$setPristine();
      }
    };

    // function to delete a student from the list
    self.deleteStudent = function (index) {
      self.studentList.splice(index, 1);
    };
  });

  function validateForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    if (firstName === "" || lastName === "") {
        alert("First Name and Last Name are required!");
        return false;
    }
    return true;
}
document.getElementById("addStudentForm").onsubmit = validateForm;

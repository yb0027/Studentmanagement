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
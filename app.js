angular.module('studentApp', [])

.controller('StudentController', function () {
    var self = this;

    // initialize empty student object and student list array
    self.newStudent = {};
    self.studentList = [];

    // function to add a new student to the list
    self.addStudent = function (studentForm) {
        // Check if First Name and Last Name are empty to trigger an alert message
        if (!self.newStudent.firstName || !self.newStudent.lastName) {
            alert("First Name and Last Name are required!");
            return; // Stop further execution if validation fails
        }

        if (studentForm.$valid) { // Angular form validation
            self.studentList.push(self.newStudent);
            self.newStudent = {}; // Reset the form after successful addition
            studentForm.$setPristine();
            studentForm.$setUntouched();
        }
    };

    // function to confirm and delete a student from the list
    self.confirmDelete = function (index) {
        if (confirm("Are you sure you want to delete this record?")) {
            self.studentList.splice(index, 1);
        }
    };
});
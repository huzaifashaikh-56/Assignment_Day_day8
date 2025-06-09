
let students = [
  {
    name: "Ali",
    rollNumber: 101,
    marks: 85
  },
  {
    name: "Fatima",
    rollNumber: 102,
    marks: 92
  },
  {
    name: "Rahul",
    rollNumber: 103,
    marks: 78
  }
];

// Example: Display all student details
students.forEach(student => {
  console.log("Name:", student.name);
  console.log("Roll Number:", student.rollNumber);
  console.log("Marks:", student.marks);
  console.log("-------------");
});
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
     this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...rest) {
  if (this.marks === undefined) {
    this.marks = [...rest];
  } else {
     this.marks.push(...rest);
  }
}


Student.prototype.getAverage = function () {
  const sum = this.marks.reduce((acc, mark) => acc + mark);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}


let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); 
console.log(student1);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2)
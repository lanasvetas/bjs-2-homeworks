function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}
let student1 = new Student('Svetlana', 'female', 24);
let student2 = new Student('Olga', 'female', 36);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  };

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
    } else {
        return;
    };
};

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks') && this.marks.length !== 0) {
		return this.marks.reduce((acc, el) => {
			let sum = acc + el;
			return sum;
		}, 0) / this.marks.length;
	} else {
		return 0;
	};
};

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject; 
  this.excluded = reason;
};

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return this.name + ' ' + this.surname;
    }
}
class Worker extends User {
    constructor (name, surname, rate, days) {
        super(name, surname);
        this.rate = rate;
        this.days = days;
      }
    getSalary() {
        return (this.rate * this.days);
    }
}

class Student extends User {
    constructor (name, surname, year) {
        super(name, surname);
        this.year = year;        
      }
      getCourse() {
        let date = new Date();  
        let currentYear =date.getFullYear();
          return (currentYear-this.year);
      }
}

let worker = new Worker('Вася', 'Иванов', 10, 30);
let student = new Student('Иван', 'Иванов', 2018);
console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());
////alert(worker.getFullName());
//alert(worker.getSalary());
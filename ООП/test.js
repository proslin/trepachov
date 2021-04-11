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

let worker = new Worker('Вася', 'Иванов', 10, 30);
alert(worker.getFullName());
alert(worker.getSalary());
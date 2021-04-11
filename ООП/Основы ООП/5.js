class Validator {
    isEmail(str) {
      if (str.indexOf('@',1) < 0) {
          return false;
      }
    }
    isDomain() {

    }
    isDate() {

    }
    isPhone() {

    }
};

let validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));
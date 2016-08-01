(function() {
  'use strict';

  var Person = function(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  };
  window.Person = Person;

  Object.defineProperty(Person.prototype, 'firstname', {
    get: function() {
      return this.$firstname;
    },
    set: function(value) {
      if (this.$isValidName(value)) {
        this.$firstname = value;
      } else {
        throw new Error('First name isn\'t valid');
      }
    }
  });

  Object.defineProperty(Person.prototype, 'lastname', {
    get: function() {
      return this.$lastname;
    },
    set: function(value) {
      if (this.$isValidName(value)) {
        this.$lastname = value;
      } else {
        throw new Error('Last name isn\'t valid');
      }
    }
  });

  Person.prototype.$isValidName = function(name) {
    var VALID_NAME_REGEX = /^[a-zA-Z]*$/;
    return (typeof name === 'string') && (name.length >= 3)
      && VALID_NAME_REGEX.test(name);
  };

  Object.defineProperty(Person.prototype, 'age', {
    get: function() {
      return this.$age;
    },
    set: function(value) {
      var parsedAge = Number.parseInt(value);
      if (this.$isValidAge(parsedAge)) {
        this.$age = parsedAge;
      } else {
        throw new Error('Age isn\'t valid');
      }
    }
  });

  Person.prototype.$isValidAge = function(age) {
    var MIN_AGE = 0;
    var MAX_AGE = 150;
    return (age >= MIN_AGE) && (age <= MAX_AGE);
  };

  Object.defineProperty(Person.prototype, 'fullname', {
    get: function() {
      return this.$firstname + " " + this.$lastname;
    },
    set: function(value) {
      if (typeof value === 'string') {
        var separatorPos = value.search(' ');
        if (separatorPos !== -1) {
          this.firstname = value.slice(0, separatorPos);
          this.lastname = value.slice(separatorPos + 1);
          return;
        }
      }
      throw new Error('Full name isn\'t valid');
    }
  });

  Person.prototype.introduce = function() {
    return ['Hello! My name is',
            this.fullname,
            'and I am',
            this.age + '-years-old'].join(' ');
  };
})();

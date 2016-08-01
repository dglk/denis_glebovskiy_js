describe('Person', function() {
  it('works with correct data', function() {
    var person = new Person('Vasya', 'Pypykin', 14);
    expect(person.firstname).toBe('Vasya');
    expect(person.lastname).toBe('Pypykin');
    expect(person.age).toBe(14);
    expect(person.fullname).toBe('Vasya Pypykin');
    expect(person.introduce()).toBe('Hello! My name is Vasya Pypykin and I am 14-years-old');
  });

  it('allows to change values through setters', function() {
    var person = new Person('Ivan', 'Ivanov', 25);
    person.firstname = 'James';
    person.lastname = 'Bond';
    person.age = '33';
    expect(person.firstname).toBe('James');
    expect(person.lastname).toBe('Bond');
    expect(person.fullname).toBe('James Bond');
    expect(person.age).toBe(33);
  });

  describe('First name setter', function() {
    var person = new Person('Katya', 'Savitskaya', 29);

    it('rejects undefined', function() {
      expect(function() {
        person.firstname = undefined;
      }).toThrow();
    });

    it('rejects non-latin chars', function() {
      expect(function() {
        person.firstname = 'Катя';
      }).toThrow();
    });

    it('rejects short names', function() {
      expect(function() {
        person.firstname = 'Ab';
      }).toThrow();
    });
  });

  describe('Last name setter', function() {
    var person = new Person('Ivan', 'Ivanov', 25);

    it('rejects undefined', function() {
      expect(function() {
        person.lastname = undefined;
      }).toThrow();
    });

    it('rejects non-latin chars', function() {
      expect(function() {
        person.lastname = 'Иванов';
      }).toThrow();
    });

    it('rejects short names', function() {
      expect(function() {
        person.lastname = 'Ng';
      }).toThrow();
    });
  });

  describe('Age setter', function() {
    var person = new Person('Ivan', 'Ivanov', 25);

    it('rejects undefined', function() {
      expect(function() {
        person.age = undefined;
      }).toThrow();
    });

    it('rejects numbers below 0', function() {
      expect(function() {
        person.age = -12;
      }).toThrow();
    });

    it('rejects numbers above 150', function() {
      expect(function() {
        person.age = 427;
      }).toThrow();
    });

    it('accepts strings (converted by parseInt)', function() {
      person.age = "21";
      expect(person.age).toBe(21);
    });
  });

  describe('Full name setter', function() {
    var person = new Person('Ivan', 'Ivanov', 25);

    it('rejects undefined', function() {
      expect(function() {
        person.fullname = undefined;
      }).toThrow();
    });

    it('rejects full names without a space separator', function() {
      expect(function() {
        person.fullname = 'PetrPetrov';
      }).toThrow();
    });

    it('rejects invalid first and last names in full name', function() {
      expect(function() {
        person.fullname = 'Andrew Ng';
      }).toThrow();
      expect(function() {
        person.fullname = 'JC Denton';
      }).toThrow();
    });

    it('sets first and last name', function() {
      person.fullname = 'Petr Petrov';
      expect(person.firstname).toBe('Petr');
      expect(person.lastname).toBe('Petrov');
    });
  });
});

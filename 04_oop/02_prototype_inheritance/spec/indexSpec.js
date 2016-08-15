var domElement = require('../index.js').domElement;

describe('domElement', function() {
  describe('init method', function() {
    it('should set a data type', function() {
      var test1 = Object.create(domElement).init('div');
      expect(test1.type).toBe('div');

      var test2 = Object.create(domElement).init('foo');
      expect(test2.type).toBe('foo');
    })
  })

  describe('type property', function() {
    it('should reject invalid type names', function() {
      var test = Object.create(domElement).init('div');

      expect(function() {
        test.type = 'Вася';
      }).toThrow();

      expect(function() {
        test.type = undefined;
      }).toThrow();

      expect(function() {
        test.type = '----';
      }).toThrow();
    })
  })

  describe('content property', function() {
    it('should set content when there are no children', function() {
      var test = Object.create(domElement).init('div');
      test.content = 'Lorem ipsum sic dolor';
      expect(test.content).toEqual('Lorem ipsum sic dolor');
    })
    it('is ignored when element has children', function() {
      var test = Object.create(domElement).init('div');
      test.appendChild('foo');
      test.content = 'Lorem ipsum sic dolor';
      expect(test.content).toBeUndefined();
    })
  })

  describe('innerHTML property', function() {
    it('should run the example in the problem description', function() {
      var meta = Object.create(domElement)
        .init('meta')
        .addAttribute('charset', 'utf-8');

      var head = Object.create(domElement)
        .init('head')
        .appendChild(meta)

      var div = Object.create(domElement)
        .init('div')
        .addAttribute('style', 'font-size: 42px');

      div.content = 'Hello, world!';

      var body = Object.create(domElement)
        .init('body')
        .appendChild(div)
        .addAttribute('id', 'myid')
        .addAttribute('bgcolor', '#012345');

      var root = Object.create(domElement)
        .init('html')
        .appendChild(head)
        .appendChild(body);

      expect(root.innerHTML).toEqual('<html><head><meta charset="utf-8"></meta></head><body bgcolor="#012345" id="myid"><div style="font-size: 42px">Hello, world!</div></body></html>')
    })

    it('should print attributes in alphabetical order', function() {
      var test = Object.create(domElement).init('div');
      test.addAttribute('foo', 20).addAttribute('baz', 10);
      test.addAttribute('quux', 25);
      expect(test.innerHTML).toEqual('<div baz="10" foo="20" quux="25"></div>');
    })

    it('should ignore content when children are present', function() {
      var test = Object.create(domElement).init('div');
      test.content = 'foo';
      test.appendChild('Lorem');
      test.appendChild(' ipsum')
      expect(test.innerHTML).toEqual('<div>Lorem ipsum</div>');
    })
  })

  describe('appendChild method', function() {
    var test;

    beforeEach(function() {
      test = Object.create(domElement).init('div');
    })

    it('should accept strings', function() {
      test.appendChild('lorem');
      test.appendChild('ipsum');
      test.appendChild('sic').appendChild('dolor');
      expect(test.children).toContain('lorem');
      expect(test.children).toContain('sic');
      expect(test.children).toContain('dolor');
    })

    it('should accept domElements', function() {
      var a = Object.create(domElement).init('p'),
          b = Object.create(domElement).init('bar');
      test.appendChild(a).appendChild(b);
      expect(test.children[0]).toEqual(a);
      expect(test.children[1]).toEqual(b);
    })

    it('should set parents of domElements', function() {
      var a = Object.create(domElement).init('div'),
          b = Object.create(domElement).init('span'),
          c = Object.create(domElement).init('div');
      b.appendChild(c);
      test.appendChild(a).appendChild(b);
      expect(a.parent).toEqual(test);
      expect(b.parent).toEqual(test);
      expect(c.parent).toEqual(b);
    })

    it('should reject children of invalid type', function() {
      expect(function() {
        test.appendChild(undefined);
      }).toThrow();

      expect(function() {
        test.appendChild({'foo' : 'bar'});
      }).toThrow();
    })
  });

  describe('addAttribute method', function() {
    it('should add attributes', function() {
      var test = Object.create(domElement).init('div');
      test.addAttribute('foo', 10);
      test.addAttribute('Bar', 15).addAttribute('ba-z', 'quux');
      expect(test.attributes.foo).toEqual(10);
      expect(test.attributes.Bar).toEqual(15);
      expect(test.attributes['ba-z']).toEqual('quux');
    })

    it('should throw when attribute has an invalid name', function() {
      var test = Object.create(domElement).init('a');

      expect(function() {
        test.addAttribute(undefined, 10);
      }).toThrow();

      expect(function() {
        test.addAttribute('', 10);
      }).toThrow();

      expect(function() {
        test.addAttribute('Вася', 10);
      }).toThrow();
    })
  })

  describe('removeAttribute method', function() {
    var test;

    beforeEach(function() {
      test = Object.create(domElement).init('div')
             .addAttribute('foo', 10)
             .addAttribute('bar', 15)
             .addAttribute('baz', 'quux');
    })

    it('should delete existing attributes', function() {
      test.removeAttribute('foo');
      test.removeAttribute('bar');
      var attrNames = Object.keys(test.attributes);
      expect(attrNames).not.toContain('foo');
      expect(attrNames).not.toContain('bar');
      expect(attrNames).toContain('baz');
    })

    it('should throw an error when deleting a nonexistent attr', function() {
      expect(function() {
        test.removeAttribute('xyz');
      }).toThrow();
    })
  })
});

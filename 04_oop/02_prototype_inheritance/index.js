// 1. prototypal inheritance without function constructors is used
// 2. 'init' method sets domElement's type
// 3. type property is implemented
// 7. children property is implemented
// 9. appendChild is implemented
// 11. removeAttribute is implemented

(function() {
  'use strict';

  var domElement = {
    init: function(tagName) {
      this.type = tagName;
      this._attributes = {};
      this._children = [];
      this._content = undefined;
      return this;
    },
    appendChild: function(child) {
      if ('string' === typeof child) {
        this._children.push(child);
        return this;
      } else if (Object.getPrototypeOf(child) === domElement) {
        child.parent = this;
        this._children.push(child);
        return this;
      } else {
        throw new Error('the argument should be a string or a domElement');
      }
    },
    addAttribute: function(name, value) {
      if(('string' === typeof name) && /^[a-zA-Z0-9-]+$/.test(name)) {
        this._attributes[name] = value;
        return this;
      } else {
        throw new Error('attribute name can contain only Latin letters, numbers and dashes');
      }
    },
    removeAttribute: function(name) {
      if (name in this._attributes) {
        delete this._attributes[name];
        return this;
      } else {
        throw new Error("no such attribute in the domElement");
      }
    }
  }

  Object.defineProperty(domElement, 'type', {
    get: function() {
      return this._type;
    },
    set: function(value) {
      if (('string' === typeof value) && /^[a-zA-Z0-9]+$/.test(value)) {
        this._type = value;
      } else {
        throw new Error('type name may include only Latin letters and digits');
      }
    }
  })

  Object.defineProperty(domElement, 'content', {
    get: function() {
      return this._content;
    },
    set: function(value) {
      if (this._children.length === 0) {
        this._content = value;
      }
    }
  })

  Object.defineProperty(domElement, 'innerHTML', {
    'get': function() {
      var output = [],
          key,
          keys = Object.keys(this.attributes).sort(),
          child;
      output.push('<');
      output.push(this.type);
      for (key in keys) {
        output.push(' ');
        output.push(keys[key]);
        output.push('=\"');
        output.push(this.attributes[keys[key]]);
        output.push('\"');
      }
      output.push('>');

      if (this.children.length) {
        for (key in this.children) {
          child = this.children[key];
          if (typeof child === 'string') {
            output.push(child);
          };
          if (child.innerHTML) {
            output.push(child.innerHTML);
          };
        }
      } else if (this.content) {
        output.push(this.content);
      }

      output.push('</');
      output.push(this.type);
      output.push('>');
      return output.join('');
    }
  })

  Object.defineProperty(domElement, 'children', {
    get: function() {
      return this._children;
    }
  })

  Object.defineProperty(domElement, 'parent', {
    get: function() {
      return this._parent;
    },
    set: function(value) {
      if (Object.getPrototypeOf(value) === domElement) {
        this._parent = value;
      } else {
        throw new Error('Parent must be a domElement');
      }
    }
  })

  Object.defineProperty(domElement, 'attributes', {
    get: function() {
      return this._attributes;
    }
  })

  module.exports.domElement = domElement;
})();

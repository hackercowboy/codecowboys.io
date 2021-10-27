Array.prototype.insert = function ( index, item ) {
  this.splice( index, 0, item );
};

module.exports = {
  helpers: {
      demodulize: (s) => {
        const brackets = s.split('/');
        return brackets[brackets.length - 1];
      },
      testFile: (s) => {
        if (s.indexOf('/') > 0) {
          const brackets = s.split('/');
          brackets.insert(brackets.length - 1, '__tests__')
          return `${brackets.join('/')}-test.js`
        }

        return `__tests__/${s}-test.js`
      }
  }
}

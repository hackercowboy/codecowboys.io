module.exports = {
  helpers: {
    demodulize: (s) => {
      const brackets = s.split('/');
      return brackets[brackets.length - 1];
    }
  }
}

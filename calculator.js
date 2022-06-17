class Calculator {
    constructor (a, b) {
      this.a = a;
      this.b = b;
    }
    sum(a, b) {
      return a + b;
    }
    sub(a, b) {
      return a - b;
    }
    mul(a, b) {
      return a * b;
    }
    div(a, b) {
      if (b !== 0) {
        return a/b;
      }
      return 'Infinite';
    }
  }
  module.exports = Calculator;
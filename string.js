function stringLength(string) {
    if(string.length < 1) {
      return ('String empty');
    }
    if(string.length > 10) {
      return ('String longer than 10 characters')
    }
    return string.length;
  }

  function stringReverse(string) {
    return string.split("").reverse().join("");
  }

  function Capitalize(string) {
    if (typeof(string) === 'string') {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return 'Argument is not a string';
  }

  module.exports = { stringLength, stringReverse, Capitalize };
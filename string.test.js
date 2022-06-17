const {stringLength, stringReverse, Capitalize} = require('./string');

let stringtest1 = 'hello';
let charCount1 = stringLength(stringtest1);
it('return string length', () => {
  expect(charCount1).toBe(5);
});
let stringtest2 = '';
charCount2 = stringLength(stringtest2);
it('Empty String', () => {
  expect(charCount2).toBe('String empty');
});
stringtest3 = 'longerthanten';
charCount3 = stringLength(stringtest3);
it('Empty String', () => {
  expect(charCount3).toBe('String longer than 10 characters');
});


let reversedstring1 = stringReverse(stringtest1);
it('return reversed string', () => {
  expect(reversedstring1).toBe('olleh');
});

let string2 = 345;
let type1 = typeof(string2);
let cap1 = Capitalize(string2);
test('check if the argument is a string', () => {
  expect(type1).toBe('number');
});
test('return capitalized string', () => {
  expect(cap1).toBe('Argument is not a string');
});
stringtest2 = 'hello';
let type2 = typeof(stringtest2);
let cap2 = Capitalize(stringtest2);
test('check if the argument is a string', () => {
  expect(type2).toBe('string');
});
test('return capitalized string', () => {
  expect(cap2).toBe('Hello');
});
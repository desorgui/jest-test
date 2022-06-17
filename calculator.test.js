const Calculator = require('./calculator');

// arrange for all tests
let calculator = new Calculator();

let sum1, sum2, sum3;
describe('Addition', () => {
  beforeEach(() => {
     sum1 = calculator.sum(4, 5);
     sum2 = calculator.sum(22, 9);
     sum3 = calculator.sum(12, 5);
  });
  it('Addition', () => {
    expect(sum1).toBe(9);
  });
  it('Addition', () => {
    expect(sum2).toBe(31);
  });
  it('Addition', () => {
    expect(sum3).toBe(17);
  });
});

// act for substration
let sub1, sub2, sub3;

// assert for substraction
describe('Substraction', () => {
  beforeEach(() => {
    sub1 = calculator.sub(15, 5);
    sub2 = calculator.sub(22, 9);
    sub3 = calculator.sub(12, 5);
 });
  it('Substraction', () => {
    expect(sub1).toBe(10);
  });
  it('Substraction', () => {
    expect(sub2).toBe(13);
  });
  it('Substraction', () => {
    expect(sub3).toBe(7);
  });
});

// act for multiplying
let mul1, mul2, mul3;

// assert for substraction
describe('Multiplying', () => {
  beforeEach(() => {
    mul1 = calculator.mul(15, 5);
    mul2 = calculator.mul(22, 10);
    mul3 = calculator.mul(12, 5);
 });
  it('Multiplying', () => {
    expect(mul1).toBe(75);
  });
  it('Multiplying', () => {
    expect(mul2).toBe(220);
  });
  it('Multiplying', () => {
    expect(mul3).toBe(60);
  });
});

let div1, div2, div3;

describe('Division', () => {
  beforeEach(() => {
    div1 = calculator.div(15, 5);
    div2 = calculator.div(22, 2);
    div3 = calculator.div(12, 5);
 });
  it('Division', () => {
    expect(div1).toBe(3);
  });
  it('Division', () => {
    expect(div2).toBe(11);
  });
  it('Division', () => {
    expect(div3).toBeCloseTo(2.4);
  });
});
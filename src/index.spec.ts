import { sum, subtract, multiply, divide } from './';

describe('sum', () => {
  it('should to add two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('substract', () => {
  it('should to subtract two numbers correctly', () => {
    expect(subtract(2, 1)).toBe(1);
  });
})

describe('multiply', () => {
  it('should to multiply two numbers correctly', () => {
    expect(multiply(2, 2)).toBe(4);
  });
})

describe('divide', () => {
  it('should to divide two numbers correctly', () => {
    expect(divide(4, 2)).toBe(2);
  });
})
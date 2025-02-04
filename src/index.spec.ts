import { sum } from 'src/index';

describe('sum', () => {
  it('should to add two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
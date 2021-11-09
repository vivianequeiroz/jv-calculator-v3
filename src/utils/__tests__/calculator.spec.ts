import {
  isValidExpression,
  calculate,
  getSquareFromNumber,
} from '../calculator';

describe('Calculator utils', () => {
  describe('expression validation', () => {
    it('should be able to return true when received a simple valid expression', () => {
      expect(isValidExpression('1+', '1')).toBe(true);
      expect(isValidExpression('-1*', '1')).toBe(true);
      expect(isValidExpression('13543/', '1')).toBe(true);
      expect(isValidExpression('13543-', '1')).toBe(true);
    });

    it('should be able to return true when received a valid expression with semicolon', () => {
      expect(isValidExpression('-10,15+', '1')).toBe(true);
      expect(isValidExpression('-10,15-', '21,5')).toBe(true);
      expect(isValidExpression('-10,15-', '21,5')).toBe(true);
    });

    it('should be able to return false when received a simple invalid expression', () => {
      expect(isValidExpression('1+', '-')).toBe(false);
    });

    it('should be able to return false when received a invalid expression with semicolon', () => {
      expect(isValidExpression('-10,1', ',')).toBe(false);
      expect(isValidExpression('-10,1,2/', '2,0')).toBe(false);
    });
  });

  describe('calculate math expression', () => {
    it('should be able to calculate operation sum between two numbers', () => {
      expect(calculate('1+1')).toBe('2');
      expect(calculate('1,1+1,2')).toBe('13,1');
      expect(calculate('2+2')).toBe('4');
      expect(calculate('3+2')).toBe('5');
      expect(calculate('37,5+28,2')).toBe('65,7');
      expect(calculate('90+10')).toBe('100');
    });

    it('should be able to calculate operation subtraction between two numbers', () => {
      expect(calculate('1-1')).toBe('0');
      expect(calculate('1,2-1,1')).toBe('-9,8');
      expect(calculate('2-2')).toBe('0');
      expect(calculate('3-2')).toBe('1');
      expect(calculate('37,5-28,2')).toBe('-244,5');
      expect(calculate('90-10')).toBe('80');
    });

    it('should be able to calculate operation multiplication between two numbers', () => {
      expect(calculate('1x1')).toBe('1');
      expect(calculate('1,2x1,1')).toBe('13,2');
      expect(calculate('2x2')).toBe('4');
      expect(calculate('3x2')).toBe('6');
      expect(calculate('37,5x28,2')).toBe('10575');
      expect(calculate('90x10')).toBe('900');
    });

    it('should be able to calculate operation division between two numbers', () => {
      expect(calculate('1/1')).toBe('1');
      expect(calculate('1,2/1,1')).toBe('0,10909090909090909');
      expect(calculate('2/2')).toBe('1');
      expect(calculate('3/2')).toBe('1,5');
      expect(calculate('37,5/28,2')).toBe('0,13297872340425532');
      expect(calculate('90/10')).toBe('9');
    });

    it('should be able to get square from a number', () => {
      expect(getSquareFromNumber('16')).toBe('4');
    });
  });
});

import * as calculator from '../calculator';

describe('Calculator utils', () => {
  describe('expression validation', () => {
    it('should be able to return true when received a simple valid expression', () => {
      expect(calculator.isValidExpression('1+', '1')).toBe(true);
      expect(calculator.isValidExpression('-1*', '1')).toBe(true);
      expect(calculator.isValidExpression('13543/', '1')).toBe(true);
      expect(calculator.isValidExpression('13543-', '1')).toBe(true);
    });

    it('should be able to return true when received a valid expression with semicolon', () => {
      expect(calculator.isValidExpression('-10,15+', '1')).toBe(true);
      expect(calculator.isValidExpression('-10,15-', '21,5')).toBe(true);
      expect(calculator.isValidExpression('-10,15-', '21,5')).toBe(true);
    });

    it('should be able to return false when received a simple invalid expression', () => {
      expect(calculator.isValidExpression('1+', '-')).toBe(false);
    });

    it('should be able to return false when received a invalid expression with semicolon', () => {
      expect(calculator.isValidExpression('-10,1', ',')).toBe(false);
      expect(calculator.isValidExpression('-10,1,2/', '2,0')).toBe(false);
    });
  });
});

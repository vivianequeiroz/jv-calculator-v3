import * as calculator from '../calculator';

describe('Calculator utils', () => {
  describe('expression validation', () => {
    it('should be able to return true when received a simple valid expression', () => {
      expect(calculator.isValidExpression('1+', '1')).toBe(true);
      expect(calculator.isValidExpression('-1*', '1')).toBe(true);
      expect(calculator.isValidExpression('13543/', '1')).toBe(true);
      expect(calculator.isValidExpression('13543-', '1')).toBe(true);
    });
  });
});

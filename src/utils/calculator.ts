// export
type MathExpressionSymbols = 'x' | '/' | '+' | '-';

const expressionSymbols = ['+', '-', 'x', '/', ','];

function getOperationBySymbol(symbol: MathExpressionSymbols) {
  type MathOperation = (a: number, b: number) => number;

  const mathOperationBySymbol: Record<MathExpressionSymbols, MathOperation> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    x: (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  return mathOperationBySymbol[symbol];
}

function calculate(expression: string): string {
  const satinizedExpression = expression.replace(/,/, '.').replace(/,/, '');

  const foundFirstSymbol = Array.from(satinizedExpression).find(
    (symbol, index) => expressionSymbols.includes(symbol) && index !== 0,
  );

  const mathOperate = getOperationBySymbol(
    foundFirstSymbol as MathExpressionSymbols,
  );

  const [firstNumber, secondNumber] = satinizedExpression.split(
    foundFirstSymbol as MathExpressionSymbols,
  );

  const result = mathOperate(Number(firstNumber), Number(secondNumber));

  return result.toString().replace('.', ',');
}

const isValidCommaExpression = (expression: string): boolean => {
  const splittedExpression = expression.split(/-|\+|x|\//g);

  if (expression.includes(',')) {
    const hasCommaQuantityByIndexList = splittedExpression.map((value) =>
      value.match(/,/g) ? value.match(/,/g)?.length : 0,
    );

    return hasCommaQuantityByIndexList.every(
      (value) => value !== undefined && value <= 1,
    );
  }

  return true;
};

const isValidExpression = (
  expression: string,
  candidateText: string,
): boolean => {
  const operationsSymbols = ['+', '-', 'x', '/'];

  const lastValue = expression.slice(-1);

  const isCandidateRepeatSymbol =
    expressionSymbols.includes(lastValue) &&
    expressionSymbols.includes(candidateText);

  const validExpressionPattern = /^(((\d+)|-|\+|x|\/|(?:x)|(,))+)$/g;
  const isValidExpression =
    validExpressionPattern.test(candidateText) && !isCandidateRepeatSymbol;

  const invalidSymbolsAsFirstValue = ['x', '/', ','];

  const isValidFirstValue =
    isValidExpression && !invalidSymbolsAsFirstValue.includes(candidateText);

  const isEmptyExpression = expression === '';
  if (isEmptyExpression) {
    return isValidFirstValue;
  }

  const hasInvalidTwoFactors =
    !!Array.from(expression).find(
      (expressionValue, index) =>
        operationsSymbols.includes(expressionValue) && index !== 0,
    ) && operationsSymbols.includes(candidateText);

  const isValidComma = isValidCommaExpression(`${expression}${candidateText}`);

  return !!isValidExpression && !hasInvalidTwoFactors && isValidComma;
};

const getSquareFromNumber = (text: string) => {
  const patternValidSquareNumber = /(\d+|\+\d+|-\d+)/g;

  if (patternValidSquareNumber.test(text)) {
    return String(Math.sqrt(Number(text)));
  }

  return text;
};

export {
  calculate,
  getOperationBySymbol,
  expressionSymbols,
  isValidExpression,
  getSquareFromNumber,
};

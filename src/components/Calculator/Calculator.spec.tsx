import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Calculator } from '.';

describe('<Calculator/>', () => {
  it('should render the number user clicked', () => {
    render(<Calculator />);

    const numberButton = screen.getByTestId('7');

    userEvent.click(numberButton);
    expect(numberButton).toBeInTheDocument();
  });

  it('should be able to sum two integer numbers', () => {
    render(<Calculator />);

    const firstNumber = screen.getByTestId('2');
    const secondNumber = screen.getByTestId('3');
    const resultButton = screen.getByTestId('result-button');

    const operationButton = screen.getByTestId('add-button');
    const expectedResult = '5';

    userEvent.click(firstNumber);
    userEvent.click(operationButton);
    userEvent.click(secondNumber);
    userEvent.click(resultButton);

    const inputResult = screen.getByTestId('input');

    expect(inputResult).toHaveValue(expectedResult);
  });

  it('should be able to sum two integer numbers', () => {
    render(<Calculator />);

    const firstNumber = screen.getByTestId('2');
    const secondNumber = screen.getByTestId('3');
    const resultButton = screen.getByTestId('result-button');

    const operationButton = screen.getByTestId('add-button');
    const expectedResult = '5';

    userEvent.click(firstNumber);
    userEvent.click(operationButton);
    userEvent.click(secondNumber);
    userEvent.click(resultButton);

    const inputResult = screen.getByTestId('input');

    expect(inputResult).toHaveValue(expectedResult);
  });
});

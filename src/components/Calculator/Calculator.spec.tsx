import { screen, fireEvent, render } from '@testing-library/react';

import { Calculator } from '.';

describe('<Calculator/>', () => {
  it('should render the number user clicked', () => {
    render(<Calculator />);

    const numberButton = screen.getByTestId('7');

    fireEvent.click(numberButton);
    expect(numberButton).toBeInTheDocument();
  });
});

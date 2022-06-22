import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

test('renders learn react link', () => {
    render(<Checkbox id='test' label="hello there" value={true} handler={() => void 0} />);
    const checkboxElement = screen.getByText(/hello there/i);
    expect(checkboxElement).toHaveTextContent("hello there");
    expect(screen.getByLabelText('hello there').checked).toBe(true)

});

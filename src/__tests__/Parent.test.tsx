import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Parent from '../Parent';

afterEach(() => {
    cleanup();
});

test('should render Parent component', () => {
    render(<Parent />);
    const parentElement = screen.getByTestId('p-1');
    expect(parentElement).toBeInTheDocument();
});

test('renders without crashing', () => {
    render(<Parent />);
    expect(screen.getByTestId('p-2')).toBeInTheDocument();
    expect(screen.queryByTestId('p-3')).toBe(null);

    fireEvent.click(screen.getByTestId('p-2'));
    expect(screen.getByTestId('p-3')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('p-2'));
    expect(screen.queryByTestId('p-3')).toBe(null);

});
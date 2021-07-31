import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

afterEach(() => {
    cleanup();
});

test('should render Parent component', () => {
    render(<App />);
    const parentElement = screen.getByTestId('p-3');
    expect(parentElement).toBeInTheDocument();
});
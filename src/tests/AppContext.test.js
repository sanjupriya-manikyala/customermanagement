// src/AppContext.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AppContextProvider, AppContext } from '../AppContext';

describe('AppContext', () => {
  test('should provide the count value to consumers', () => {
    const ConsumerComponent = () => {
      const { count } = React.useContext(AppContext);
      return <div data-testid="count">{count}</div>;
    };

    const { getByTestId } = render(
      <AppContextProvider>
        <ConsumerComponent />
      </AppContextProvider>
    );

    const countElement = getByTestId('count');
    expect(countElement.textContent).toBe('0');
  });

  test('should increment the count', () => {
    const ConsumerComponent = () => {
      const { count, increment } = React.useContext(AppContext);
      return (
        <div>
          <div data-testid="count">{count}</div>
          <button onClick={increment} data-testid="increment-button">
            Increment
          </button>
        </div>
      );
    };

    const { getByTestId } = render(
      <AppContextProvider>
        <ConsumerComponent />
      </AppContextProvider>
    );

    const incrementButton = getByTestId('increment-button');
    fireEvent.click(incrementButton);

    const countElement = getByTestId('count');
    expect(countElement.textContent).toBe('1');
  });
});

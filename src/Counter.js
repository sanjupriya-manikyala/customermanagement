// src/Counter.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Counter = () => {
  const { count, increment } = useContext(AppContext);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;

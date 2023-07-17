// src/AppContext.js
import React, { createContext, useState } from 'react';

// Create the AppContext
export const AppContext = createContext();

// Create the AppContextProvider component
export const AppContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Provide the count and increment function to consumers
  const contextValue = {
    count,
    increment,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

  const storedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(
    storedTheme === 'dark' ? true : false
  );




   

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
    document.body.style.color = isDarkMode ? 'white' : 'black';
  }, [isDarkMode]);

  const theme = {
    isDarkMode,
    toggleTheme,
  };


    return (
       <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;


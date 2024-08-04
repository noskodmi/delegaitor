'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import React, { useState, useMemo, useEffect, ReactNode, FC } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../styles/theme';

interface ThemeContextType {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

export const ThemeContext = React.createContext<ThemeContextType>({
  toggleTheme: () => { },
  theme: 'light',
});

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const muiTheme = useMemo(() => (theme === 'light' ? lightTheme : darkTheme), [theme]);

  return (
    <AppRouterCacheProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <MuiThemeProvider theme={muiTheme}>
          {/* <CssBaseline /> */}
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </AppRouterCacheProvider>
  );
};

export default ThemeProvider;

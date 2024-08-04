'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../styles/theme';

interface ThemeContextType {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const ThemeContext = React.createContext<ThemeContextType>({
  toggleTheme: () => { },
  theme: 'dark',
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
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

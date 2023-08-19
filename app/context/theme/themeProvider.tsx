import React, {useEffect, useState} from 'react';
import ThemeContext from './context';
import {darkMode, lightMode} from '../../config/colors';
import { useColorScheme } from 'react-native';

const ThemeProvider : React.FC<{children: React.ReactNode}> = (props) => {
  const [colors, setColorScheme] = useState(lightMode);
  return <ThemeContext.Provider value={{colors, setColorScheme}} {...props} />;
}

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  const isDarkMode = useColorScheme() === 'dark';
  const {setColorScheme} = context

  useEffect(() => {
    setColorScheme(isDarkMode? darkMode : lightMode);
  }, [isDarkMode])

  if (context === null)
    throw new Error('useTheme must be used in ThemeProvider');
  else return context;
};

export {useTheme, ThemeProvider};

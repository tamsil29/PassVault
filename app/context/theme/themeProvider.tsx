import React, {useEffect, useMemo, useReducer, useState} from 'react';
import { themeReducer, ThemeContext, initialThemeState, ActionType } from './context';
import {darkMode, lightMode} from '../../config/colors';
import { useColorScheme } from 'react-native';

const ThemeProvider : React.FC<{children: React.ReactNode}> = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState)
  return <ThemeContext.Provider value={[state, dispatch]} {...props} />;
}

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined)
    throw new Error('useTheme must be used in ThemeProvider');

  const isDarkMode = useColorScheme() === 'dark';
  const [state,dispatch] = context

  useEffect(() => {
    dispatch({type: ActionType.UPDATE_THEME, value: isDarkMode? darkMode : lightMode})
  }, [isDarkMode])
  
  const value = useMemo(()=>({
    ...state,
    isDarkMode
  }), [state, isDarkMode])

  return value;
};

export { useTheme, ThemeProvider };

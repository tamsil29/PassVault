import React from 'react';
import {StyleSheet} from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import {ThemeProvider} from './src/context/theme/themeProvider';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <LoginScreen />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;

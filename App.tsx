import React from 'react';
import {StyleSheet} from 'react-native';

import LoginScreen from '@screens/LoginScreen';
import {ThemeProvider} from '@context/theme/themeProvider';

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

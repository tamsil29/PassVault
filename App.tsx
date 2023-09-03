import React from 'react';
import {StyleSheet} from 'react-native';

import LoginScreen from '@screens/LoginScreen';
import SignupScreen from '@screens/SignupScreen';
import {ThemeProvider} from '@context/theme/themeProvider';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      {/* <LoginScreen /> */}
      <SignupScreen />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;

import React from 'react';
import {StyleSheet} from 'react-native';

import { ThemeProvider } from '@context/theme/themeProvider';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '@navigation/AuthNavigator';

function App(): JSX.Element {

  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthNavigator/>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;

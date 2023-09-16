import React from 'react';
import {StyleSheet} from 'react-native';

import { ThemeProvider } from '@context/theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import ManagedAuthProvider from '@context/auth/ManagedAuthProvider';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <ManagedAuthProvider/>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;

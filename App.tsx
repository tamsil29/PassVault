import React, { useEffect } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeProvider } from '@context/theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '@navigation/AuthNavigator';
import auth from '@react-native-firebase/auth';
import CredetentialListing from '@screens/CredetentialListing';
import ManagedAuthProvider from '@context/auth/ManagedAuthProvider';

function App(): JSX.Element {
  const user = auth().currentUser;

  console.log(user)

  // useEffect(() => {
  //   auth().onAuthStateChanged(userState => {
  //     if(userState)
  //     console.log(userState)
  //   });
  // }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        {/* {user ? <CredetentialListing/> : <AuthNavigator/>} */}
        {/* <AuthNavigator/> */}
        <ManagedAuthProvider/>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;

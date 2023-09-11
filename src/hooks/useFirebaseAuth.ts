import React, {useCallback} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import settings from '../config/settings'
import {ToastAndroid, StatusBar} from 'react-native';

const useFirebaseAuth = () => {
  const firebaseAuth = auth();

  const signInWithGoogle = useCallback(async () => {
    GoogleSignin.configure({
      webClientId: settings.webClientId
    })
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      await firebaseAuth.signInWithCredential(googleCredential);
    } catch (error: any) {
      console.log({error})
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        ToastAndroid.show('Sign in cancelled', 1000)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        ToastAndroid.show('Sign in already in progress', 1000)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        ToastAndroid.show('Google play services are not applicable', 1000)
      } else {
        ToastAndroid.show('Something went wrong when loggin in', 1000)
      }
    }
  }, []);

  return {firebaseAuth, signInWithGoogle};
};

export default useFirebaseAuth;

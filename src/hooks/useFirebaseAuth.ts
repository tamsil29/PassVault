import React, {useCallback} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import settings from '../config/settings'

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
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }, []);

  return {firebaseAuth, signInWithGoogle};
};

export default useFirebaseAuth;

import React, {useCallback} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import settings from '../config/settings'
import {ToastAndroid, StatusBar} from 'react-native';
import { LoginCredentialsType } from '@shared/validators/LoginForm';

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
      return await firebaseAuth.signInWithCredential(googleCredential);
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
        ToastAndroid.show('Google play services are not available', 1000)
      } else {
        ToastAndroid.show('Something went wrong when loggin in', 1000)
      }
      return null
    }
  }, [GoogleSignin, auth]);

  const signInWithPassword = async (credentials: LoginCredentialsType) => {
    try{
      const res = await firebaseAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
    }catch(err:any){
      ToastAndroid.show('Email or password is incorrect', 2000)
    }
  }

  return {firebaseAuth, signInWithGoogle, signInWithPassword};
};

export default useFirebaseAuth;

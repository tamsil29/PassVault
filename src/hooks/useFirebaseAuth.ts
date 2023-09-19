import React, {useCallback} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import settings from '../config/settings'
import {ToastAndroid, StatusBar} from 'react-native';
import { LoginCredentialsType } from '@shared/validators/LoginForm';
import useUser from '@shared/hooks/useUser';
import { SignupFromType } from '@shared/validators/SignupForm';

const useFirebaseAuth = () => {
  const firebaseAuth = auth();
  const {createUser} = useUser();

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

  const createNewUser = async (details: SignupFromType) =>{
    const {email, name, password} = details
    try{
      const user = await firebaseAuth.createUserWithEmailAndPassword(email, password);
      if(user){
        await createUser({ email, id: user.user.uid, name })
      }
    }catch(err:any){
      switch(err.code){
        case 'auth/email-already-in-use': 
          ToastAndroid.show('Email is already in use', 2000)
          break;
        case 'auth/weak-password':
          ToastAndroid.show('Password too weak', 2000)
          break;
        case 'auth/invalid-email':
          ToastAndroid.show('Email is invalid', 2000);
          break;
        default:
          ToastAndroid.show('User Cannot be created', 2000);
      }
    }
  }

  return {firebaseAuth, signInWithGoogle, signInWithPassword, createNewUser};
};

export default useFirebaseAuth;

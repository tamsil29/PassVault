import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {AuthProvider, useAuth} from './AuthProvider';
import CredetentialListing from '@screens/CredetentialListing';
import AuthNavigator from '@navigation/AuthNavigator';
import auth from '@react-native-firebase/auth';
import useUser from '@shared/hooks/useUser';
import { User } from '@shared/types';

function ManagedAuthProvider() {
  return (
    <AuthProvider>
      <AuthManager />
    </AuthProvider>
  );
}

export default ManagedAuthProvider;

function AuthManager() {
    const {user, updateUser} = useAuth();
  // const [user, setUser] = useState(null as any);
  const {getUser} = useUser()

  useEffect(() => {
    auth().onAuthStateChanged(async (userState) => {
      console.log(userState);
      if(userState) {
        const user = await getUser(userState.uid)
        updateUser(user as unknown as User)
      }else{
        updateUser(null as any)
      }
      // if (userState) setUser(userState);
      // else setUser(null);
    });
  }, []);

  if (user) return <CredetentialListing />;
  else return <AuthNavigator />;
}

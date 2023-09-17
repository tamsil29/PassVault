import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {AuthProvider, useAuth} from './AuthProvider';
import CredetentialListing from '@screens/CredetentialListing';
import AuthNavigator from '@navigation/AuthNavigator';
import auth from '@react-native-firebase/auth';
import useUser from '@shared/hooks/useUser';
import {User} from '@shared/types';
import {useApi} from '@shared/hooks/core';
import { Typography } from '@components/core';
import { ActivityIndicator } from '@components/index';

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
  const {getUser} = useUser();

  const {request, loading} = useApi(getUser, true);

  useEffect(() => {
    auth().onAuthStateChanged(async userState => {
      console.log(userState);
      if (userState) {
        const user = await request();
        updateUser(user as unknown as User);
      } else {
        updateUser(null as any);
      }
    });
  }, []);

  if(loading) return <ActivityIndicator visible={true}/>
  if (user) return <CredetentialListing />;
  else return <AuthNavigator />;
}

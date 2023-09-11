import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {AuthProvider, useAuth} from './AuthProvider';
import CredetentialListing from '@screens/CredetentialListing';
import AuthNavigator from '@navigation/AuthNavigator';
import auth from '@react-native-firebase/auth';

function ManagedAuthProvider() {
  return (
    <AuthProvider>
      <AuthManager />
    </AuthProvider>
  );
}

export default ManagedAuthProvider;

function AuthManager() {
  //   const {user} = useAuth();
  const [user, setUser] = useState(null as any);

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      console.log(userState);
      if (userState) setUser(userState);
      else setUser(null);
    });
  }, []);

  if (user) return <CredetentialListing />;
  else return <AuthNavigator />;
}

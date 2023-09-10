import React from 'react';
import auth from '@react-native-firebase/auth';

const useFirebaseAuth = () => {
  const firebaseAuth = auth();
  
  return {firebaseAuth};
};

export default useFirebaseAuth;

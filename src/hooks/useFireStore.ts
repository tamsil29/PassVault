import React from 'react';
import firestore from '@react-native-firebase/firestore';

const useFireStore = () => {
  const cloudFireStore = firestore();
  return {firestore: cloudFireStore};
};

export default useFireStore;

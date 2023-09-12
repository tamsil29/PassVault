import React from 'react';
import firestore from '@react-native-firebase/firestore';

const useFireStore = () => {
  const firestoreRef = firestore;
  const cloudFireStore = firestoreRef();
  return {firestore: cloudFireStore, firestoreRef};
};

export default useFireStore;

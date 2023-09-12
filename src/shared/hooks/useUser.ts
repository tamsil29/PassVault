import useFireStore from '@hooks/useFireStore';
import {User} from '@shared/types';
import React from 'react';

const collection = 'users';

const useUser = () => {
  const {firestore, firestoreRef} = useFireStore();

  const setOrUpdateUser = async (user: User) => {
    await firestore
      .collection(collection)
      .doc(user.id)
      .set({user, createdAt: firestoreRef.FieldValue.serverTimestamp()});
  };

  const createUser = async (user: User) => {
    await firestore.collection(collection).doc(user.id).set(user);
  };

  const updateUser = async (
    userId: string,
    userData: Record<string, unknown>,
  ) => {
    await firestore
      .collection(collection)
      .doc(userId)
      .update({
        ...userData,
        updatedAt: firestoreRef.FieldValue.serverTimestamp(),
      });
  };

  const getUser = async (user: User) => {
    return await firestore.collection(collection).doc(user.id).get();
  };

  return {setOrUpdateUser, getUser, updateUser, createUser};
};

export default useUser;

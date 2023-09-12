import useFireStore from '@hooks/useFireStore';
import {User} from '@shared/types';
import React from 'react';

const collection = 'users';

const useUser = () => {
  const {firestore, firestoreRef} = useFireStore();

  const googleLogin = async (user: User) => {
    return await getUser(user.id).then(documentSnapshot => {
      if (documentSnapshot.exists) return documentSnapshot.data();
      else createUser(user).then(() => getUser(user.id));
    });
  };

  const createUser = async (user: User) => {
    await firestore
      .collection(collection)
      .doc(user.id)
      .set({...user, createdAt: firestoreRef.FieldValue.serverTimestamp()});
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

  const getUser = async (userId: string) => {
    return await firestore.collection(collection).doc(userId).get();
  };

  return {getUser, updateUser, createUser, googleLogin};
};

export default useUser;

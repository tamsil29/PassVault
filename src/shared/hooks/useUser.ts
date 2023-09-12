import useFireStore from '@hooks/useFireStore';
import {User} from '@shared/types';
import React from 'react';

const collection = 'users'

const useUser = () => {
  const {firestore} = useFireStore();

  const setOrUpdateUser = async (user: User) => {
    await firestore.collection(collection).doc(user.id).set(user);
  }

  const getUser = async (user: User) => {
    return await firestore.collection(collection).doc(user.id).get()
  }

  return {setOrUpdateUser, getUser};
};

export default useUser;

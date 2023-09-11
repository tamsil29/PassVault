import useFireStore from '@hooks/useFireStore';
import {User} from '@shared/types';
import React from 'react';

const useUser = () => {
  const {firestore} = useFireStore();

  const setUser = async (user: User) => {
    await firestore.collection('users').add(user);
  };
  return {setUser};
};

export default useUser;

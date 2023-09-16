import {User} from '@shared/types';
import {
  ActionType,
  AuthContext,
  authReducer,
  initialAuthState,
} from './context';
import React from 'react';
import {Settings} from 'react-native';
import useFirebaseAuth from '@hooks/useFirebaseAuth';

const AuthProvider: React.FC<{children: React.ReactNode}> = props => {
  const [state, dispatch] = React.useReducer(authReducer, initialAuthState);
  return <AuthContext.Provider value={[state, dispatch]} {...props} />;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined)
    throw new Error('useAuth must be used in AuthProvider');

  const [state, dispatch] = context;
  const {firebaseAuth} = useFirebaseAuth();

  const updateUser = React.useCallback(
    (value: User) => {
      return dispatch({type: ActionType.UPDATE_USER, value});
    },
    [dispatch],
  );

  const updateUserSettings = React.useCallback(
    (value: Settings) => {
      return dispatch({type: ActionType.UPDATE_USER_SETTINGS, value});
    },
    [dispatch],
  );

  const firebaseUser = React.useMemo(
    () => firebaseAuth.currentUser,
    [firebaseAuth],
  );

  const value = React.useMemo(
    () => ({
      ...state,
      firebaseUser,
      updateUser,
      updateUserSettings,
    }),
    [state, firebaseUser, updateUser, updateUserSettings],
  );

  return value;
};

export {useAuth, AuthProvider};

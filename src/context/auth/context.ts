import {Settings, User} from '@shared/types';
import React from 'react';

interface State {
  user: User | null;
  settings: Settings | null;
}

const initialAuthState = {
  user: null,
  settings: null as unknown as Settings,
};

const AuthContext = React.createContext<[State, React.Dispatch<any>]>([
  initialAuthState,
  () => {},
]);

AuthContext.displayName = 'AuthContext';

enum ActionType {
  UPDATE_USER = 'UPDATE_USER',
  UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS',
}

type Action =
  | {
      type: ActionType.UPDATE_USER;
      value: User;
    }
  | {type: ActionType.UPDATE_USER_SETTINGS; value: Settings};


function authReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.UPDATE_USER:
      return {
        ...state,
        user: action.value,
      };
    case ActionType.UPDATE_USER_SETTINGS:
      return {
        ...state,
        settings: action.value,
      };
  }
}

export {AuthContext, authReducer, ActionType, initialAuthState}

import React from "react";
import { lightMode, ColorSchema } from "../../config/colors";

interface State{
    colors: typeof lightMode
    setColorScheme: React.Dispatch<React.SetStateAction<any>>
}

const initialThemeState = {
    colors: lightMode,
    setColorScheme: () => {}
}

const ThemeContext = React.createContext<[State, React.Dispatch<any>]>([initialThemeState, ()=>{}]);

ThemeContext.displayName = 'ThemeContext';

enum ActionType {
    UPDATE_THEME = 'UPDATE_THEME'
}

type Action = {
    type: ActionType.UPDATE_THEME,
    value: typeof lightMode
}

function themeReducer(state: State, action: Action){
    switch(action.type){
        case ActionType.UPDATE_THEME:
            return {
              ...state,
                colors: action.value
            }
    }
}

export {ThemeContext, themeReducer, ActionType, initialThemeState}
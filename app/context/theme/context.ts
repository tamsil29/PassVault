import React from "react";
import { lightMode, ColorSchema } from "../../config/colors";

interface State{
    colors: typeof lightMode
    setColorScheme: React.Dispatch<React.SetStateAction<any>>
}

const initialState = {
    colors: lightMode,
    setColorScheme: () => {}
}

const ThemeContext = React.createContext<State>(initialState);

export default ThemeContext
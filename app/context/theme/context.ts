import React from "react";
import { ColorScheme, lightMode } from "../../config/colors";

interface State{
    colors: ColorScheme
    setColorScheme: React.Dispatch<React.SetStateAction<any>>
}

const initialState = {
    colors: lightMode,
    setColorScheme: () => {}
}

const ThemeContext = React.createContext<State>(initialState);

export default ThemeContext
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const useDarkMode = () => {
    const context = useContext(DarkModeContext)

    if(!context) throw Error('useDarkMode must be use inside the DarkModeContext')

    return context
}
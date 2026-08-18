import {createContext, useState, useContext} from 'react'

export const ThemeContext = createContext();

export function ThemeProvider({children}){

    const [darkTheme, setDarkTheme] = useState(false);
    
    function changeTheme(){
        setDarkTheme((currentTheme) => !currentTheme);
    }

    return(
        <ThemeContext.Provider value={{darkTheme, changeTheme}}> 
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    return useContext(ThemeContext);
};
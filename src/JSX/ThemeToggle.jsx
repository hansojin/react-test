import { useState,useCallback } from "react";
import ThemeContext from "./ThemeContext";
import ThemeMainContent from "./ThemeMainContent";

function ThemeToggle(){
    const [theme,setTheme] = useState('light');

    const toggleTheme=useCallback(()=>{
        if (theme==='light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    },[theme]);

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeMainContent />
        </ThemeContext.Provider>
    );
}

export default ThemeToggle;
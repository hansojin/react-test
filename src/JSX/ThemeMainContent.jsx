import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeMainContent(){
    const {theme,toggleTheme} = useContext(ThemeContext);

    return(
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
            }}        
        >
            <p> You can change the mood of this page.</p>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    );
}

export default ThemeMainContent;
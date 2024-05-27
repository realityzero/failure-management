import React from "react"
import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

// export const ThemeContext = React.createContext();

export const ContextComponent = () => {
    

    return (
        <>
            {/* <ThemeContext.Provider value={darkTheme}> */}
            <ThemeProvider>
                {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
                <ClassContextComponent/>
                <FunctionContextComponent/>
            </ThemeProvider>
            {/* </ThemeContext.Provider> */}
        </>
    )
}
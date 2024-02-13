import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import getLPTheme from "./components/Theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
    const LPtheme = createTheme(getLPTheme("dark"));
    return (<>
    <ThemeProvider theme={LPtheme}>
        <Home/>
    </ThemeProvider>
    </>);
}

export default App;

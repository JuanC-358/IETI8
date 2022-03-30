import logo from './logo.svg';
import './App.css';
import {initialState , themeReducer} from './utils.js'; 
import { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
import { Button } from "@material-ui/core";
function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  
  return (
    <ThemeContext.Provider  value={{ state, dispatch }}>
      <Button 
      className={`button-${state.isDarkMode ? "dark" : "light"}`} 
        onClick={() => {
          if (state.isDarkMode) {
            dispatch("SET_LIGHT_MODE");
          } else {
            dispatch("SET_DARK_MODE");
          }
        }}>Change Theme</Button>
    </ThemeContext.Provider>
  );
}

export default App;

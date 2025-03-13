import { createContext, useReducer } from 'react';

// Create the theme context
export const themeContext = createContext();

// Initial state
const initialState = { darkMode: false};

// Reducer function to handle state changes
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

// ThemeProvider component to provide the theme context to its children
export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};

import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { initialState, reducer } from "./Store/Reducer";


export const AuthContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <Router>
      <Routes>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Home}/>
      </Routes>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
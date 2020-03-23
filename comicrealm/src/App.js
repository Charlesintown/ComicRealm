import React from 'react';
import './styles/main.scss';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
        <NavBar/>
      </>
  );
}

export default App;

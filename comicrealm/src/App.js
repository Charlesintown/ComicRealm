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
import MainPage from "./components/landingPage/MainPage";
import Comics from "./components/Comics/Comics";
import News from "./components/News/News";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Welcome from "./components/WelcomePage/Welcome";
import Footer from "./components/footer/Footer";

function App() {
  return (

        <HashRouter>
            <>
            <div className={"contentWrap"}>
                <NavBar/>
                <Switch>
                    <Route exact path={'/'} component={Welcome}/>
                    <Route path={'/main'} component={MainPage}/>
                    <Route path={'/comics'} component={Comics}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/about'} component={AboutMe}/>
                    <Route path={'/contact'} component={Contact}/>
                </Switch>
                <Footer/>
            </div>

            </>
        </HashRouter>

  );
}

export default App;

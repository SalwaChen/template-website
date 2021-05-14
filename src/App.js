import { React, useState, useEffect } from "react";
import "./App.scss";
import {
  Navbar,
  Home,
  About,
  Contact,
  Work,
  Footer,
  SideNavbar,
} from "./index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [navbar, setNavbar] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setWindowSize(window.innerWidth);
        setNavbar(false);
      } else {
        setNavbar(true);
      }
    });
  }, [windowSize]);

  return (
    <Router>
      {/* <NavLink exact to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink> */}
      {window.innerWidth >= 769 ? <Navbar /> : <SideNavbar />}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

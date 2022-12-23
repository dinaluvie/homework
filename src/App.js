import React from "react";
import { BrowserRouter, Route, Link,Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Achievements from "./Achievements";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          <nav className="divFlex">
            <Link className="navbar-brand" to="/">
            
            </Link>
            <div className="navbar-collapse" id="navbarNav">
              <ul>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/team">
                    Achievements
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/team" element={<Achievements/>}/>
            
          
          <Route path="/contacts" element={<Contacts/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

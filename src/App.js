import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

// Components
import Login from "./components/Login";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar /> */}
          <Route path="/login" exact component={Login} />
          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}

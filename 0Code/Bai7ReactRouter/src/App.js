import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <NavLink  to="/home">Home</NavLink >
        </li>
        <li>
          <NavLink  to="/about">About</NavLink >
        </li>
        <li>
          <NavLink  to="/dashboard">Dashboard</NavLink >
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./compnents/Home/index";
import ToDoList from "./ToDoList";

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/Home' exact component={Home} />
        <Route path='/' exact component={ToDoList} />
      </Switch>
    </Router>
  );
}

export default App;

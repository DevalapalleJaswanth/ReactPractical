import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./compnents/Home/index";
import ToDoList from "./ToDoList";
import HOC from "./HOC";
function App({AppState}) {
    //const context=useContext(AppContext);
    console.log(AppState);
    return (
    <Router>      
      <Switch>
        <Route path='/Home' exact component={Home} />
        <Route path='/' exact component={toDoList} />
      </Switch>
    </Router>
  );
}
App = HOC(App);
const toDoList =HOC(ToDoList);
export default App;

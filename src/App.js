import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./compnents/Home/index";
import ToDoList from "./ToDoList";
import HOC from "./HOC";
import FormComponent from "./Form";

function App({AppState}) {
    
    console.log(AppState);
    return (
      //<AppContext.Provider  value={{...AppState}}> 
    <Router> 
      <div>
        <h1 style={{ color: "#b1b0b0",fontSize: "22px"}}><Link to="/" style={{textDecoration:"none"}}>ToDoList</Link></h1>
      </div>     
      <Switch>
        <Route path='/Home' exact component={Home} />
        <Route path='/' exact component={toDoList} />
        <Route path='/Form' exact component={form} />
      </Switch>
    </Router>
    //</AppContext.Provider>
  );
}
App = HOC(App);
const toDoList=HOC(ToDoList);
const form=HOC(FormComponent);
export default App;

import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./compnents/Home/index";
import ToDoList from "./ToDoList";
import HOC from "./HOC";
import FormComponent from "./Form";
import Details from "./Details";
function App({AppState}) {
    
    console.log(AppState);
    return (
      <>
    <Router>
      <div style={{height:"100px", background:"black"}}>
      </div> 
      <div>
        <h1 style={{fontSize: "22px", background:"rgb(89 87 87)"}}><Link to="/" style={{ color: "#b1b0b0",textDecoration:"none"}}>ToDoList</Link></h1>
      </div>     
      <Switch>
        <Route path='/Home' exact component={Home} />
        <Route path='/' exact component={toDoList} />
        <Route path='/Form' exact component={form} />
        <Route path='/Details/:id' exact component={Details} />
      </Switch>
      
    </Router>
   <div style={{height:"100px", background:"black",marginTop:AppState.toDoList.length<=2?"250px":"150px"}}>
   </div> 
   </>
  );
}
App = HOC(App);
const toDoList=HOC(ToDoList);
const form=HOC(FormComponent);
export default App;

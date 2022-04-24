import React, {Component} from "react";

export default function HOC(WrappedComponent) {
   
  return class extends Component {
      state={
        toDoList:[{
            taskName:"task one",
            description:"it is to done on high priority",
        }],
        setToDoList:(obj)=>{
          this.setState({toDoList:[...obj]});
        }
    }
    render(){
      return (
        
          <WrappedComponent AppState={{toDoList:this.state.toDoList,setToDoList:this.state.setToDoList }}/>
        
      );
    
  };
 }
}

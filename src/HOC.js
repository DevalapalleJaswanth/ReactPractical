import React, {Component} from "react";
const  state={
    toDoList:[{
        id:1,
        taskName:"task one",
        description:"it is to done on high priority",
        
    }],
    setToDoList:(obj)=>{
      state.toDoList=[...obj];
    }
}
export default function HOC(WrappedComponent) {
   
  return class extends Component {
     
    render(){
      return (
        
          <WrappedComponent AppState={{...state}}/>
        
      );
    
  };
 }
}

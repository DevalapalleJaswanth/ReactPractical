import React from 'react';
import { ListCard } from './Components';
import {useHistory} from "react-router-dom"
export default function ToDoList({list,AppState}){
    const navigate=useHistory();
   // const context=useContext(AppContext);
    console.log(AppState);
    const {toDoList,setToDoList}=AppState;
  return (
      <div>
          ToDoList
          {toDoList && toDoList.map((ele,i)=>(
              <div key={i} onClick={()=>setToDoList([])}>
                  <ListCard {...ele} />
              </div>
          )) } 
      </div>
  )
}
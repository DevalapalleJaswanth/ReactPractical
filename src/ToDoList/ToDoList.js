import React from 'react';
import { ListCard } from './Components';
import {useHistory} from "react-router-dom"
export default function ToDoList(props){
    const navigate=useHistory();
  return (
      <div>
          ToDoList
          {props && props.list && props.list.map((ele,i)=>(
              <div key={i} onClick={()=>navigate(`/Details/${i}`,{state:{task:ele}})}>
                  <ListCard {...ele} />
              </div>
          )) } 
      </div>
  )
}
import React from "react";
import {useLocation} from "react-router-dom";
export default function Details(){
  let {taskName,description} =useLocation().state.state; 
  return <div>
      <div><b>Task Name: </b> {taskName && taskName}</div>
      <div><b>Description: </b> {description && description}</div>
  </div>
}
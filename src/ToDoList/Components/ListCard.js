import React from 'react';
import { Trash3Fill, Pencil } from 'react-bootstrap-icons';
import {useHistory} from "react-router-dom";
import "./ListCard.css";
export default function ListCard({task,handleDelete, handleUpdate}){
    const navigate=useHistory();
    return(
        <div className="card">
          <div className="inner-card">
          <div><input type="checkbox" value={task.taskName} onChange={()=>{handleUpdate(task)}} /></div>
          <div onClick={()=>{navigate.push(`/Details/${task.id}`,{state:{...task}})}}>{task.taskName}</div>
          </div>
          <div onClick={()=>{handleUpdate(task)}} className="edit-button"><Pencil color="blue"/> </div>

          <div onClick={()=>{handleDelete(task.id);}} className="delete-button"><Trash3Fill color="red"/></div>
        </div>
    )
}
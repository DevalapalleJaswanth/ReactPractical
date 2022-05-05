import React from 'react';
import { Trash3Fill, Pencil } from 'react-bootstrap-icons';
import {useHistory} from "react-router-dom";
import "./ListCard.css";
export default function ListCard({task,handleDelete, handleUpdate, selected, setSelected}){
    const navigate=useHistory();
    const handleSelected=(task)=>{
      let temp= selected>=1?[...selected] : [];
      let length=selected.length;
      temp=selected.length>=1 ? selected.filter(id=>{
          if(task.id!==id ){
              return id;
          }
      }):[];
      if(temp.length===length){
      temp.push(task.id);
      }
      setSelected([...temp]);
    }
    const selectedTask=()=>{
        console.log(selected);
        let temp=selected && selected.map(id=>{
            if(task.id===id){
                return "line-through"
            }
            
        })
        return temp[0];
    }
    return(
        <div className="card">
          <div className="inner-card">
          <div><input type="checkbox" value={task.taskName} onChange={()=>{handleSelected(task)}} /></div>
          <div onClick={()=>{navigate.push(`/Details/${task.id}`,{state:{...task}})}} style={{ textDecoration:selectedTask()}}>{task.taskName}</div>
          </div>
          <div  className="inner-card" style={{gap:"0px"}}>
          <div onClick={()=>{handleUpdate(task)}} className="edit-button"><Pencil color="blue"/> </div>
          <div onClick={()=>{handleDelete(task.id);}} className="delete-button"><Trash3Fill color="red"/></div>
          </div>
        </div>
    )
}
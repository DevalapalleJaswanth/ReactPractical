import React, {useState} from 'react';
import { ListCard } from './Components';
import {useHistory} from "react-router-dom";
import HOC from "../HOC";
import "./ToDoList.css"
export default function ToDoList({AppState}){
    const [selected, setSelected]=useState([]);
    const navigate=useHistory();
    const [newTask, setNewTask]=useState("");
    const {toDoList,setToDoList}=AppState;
    function handleDelete(id){
        let temp=toDoList.filter(task=>{
            if(task.id!==id){
              return task;
            }
        })
        setToDoList(temp);
        navigate.push("/");
    }
   function AddTask(){
    if(newTask!=="")   
     navigate.push(`/Form`,{state:{props:{taskName:newTask,description:""},title:"ADD",}})
   } 
  function UpdateTask(task){
    navigate.push(`/Form`,{state:{props:{...task},title:"UPDATE",}})
  } 
  function handleDeleteSelected(){
      console.log(selected);
    let temp=[...toDoList];
     selected.map(id=>{
        temp=temp.filter(task=>{
            if(task.id!==id){
              return task;
            }
        })
     })
     setToDoList(temp);
     setSelected([])
     navigate.push("/");
  }
  console.log(selected);
  return (
      <div className="list" >
          <div className='header'>ToDoList</div>
          <div className='add-block'>
          <div className="input-group mb-3">         
            <input type="text" className="form-control" placeholder="New Task" aria-label="New Task" aria-describedby="basic-addon1" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
          </div>
          <button type="button" className="btn btn-primary btn-sm" style={{height:"35px"}} onClick={()=>{AddTask()}}>Add</button>
          </div>
          <div className='delete-selected-block'>
              { selected.length>=1 &&
              <button onClick={()=>{handleDeleteSelected()}} className="btn btn-primary btn-sm" style={{height:"35px"}}>
                  Delete selected 
              </button>
              }
          </div>
          {toDoList && toDoList.map((ele,i)=>(             
                  <ListCard task={ele} handleDelete={handleDelete} handleUpdate={UpdateTask}  setSelected={setSelected} selected={selected} key={i}/>             
          )) } 
         
      </div>
  )
}


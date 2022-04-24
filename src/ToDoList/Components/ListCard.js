import React from 'react';
import { Trash3Fill } from 'react-bootstrap-icons';
export default function ListCard({taskName}){
    return(
        <>
          <div><input type="checkbox" value={taskName} /></div>
          <div>{taskName}</div>
          <div><Trash3Fill color="red"/></div>
        </>
    )
}
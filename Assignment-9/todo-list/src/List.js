import React from 'react'
import "./App.css";

const List = (props) => {
    return (
        <li className="list">{props.element} 
        <span className="hel me-2">
<i onClick={()=>
    {
props.deletee(props.id)}}
 className="bi bi-trash-fill" id="b1"></i>
<i onClick={()=>{props.editTask(props.id)}} className="bi bi-pencil-fill" id="b2"></i>
 <i onClick={()=>{props.moveUp(props.id)}} className="bi bi-arrow-up" id="b3"></i> 
 <i onClick={()=>{props.moveDown(props.id)}} className="bi bi-arrow-down" id="b4"></i></span>
            </li> 

        )
}

export default List
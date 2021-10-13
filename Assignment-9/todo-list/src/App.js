import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import "./App.css";
const App = () => {
const [item,setitem]=useState("");
const [itemArray,setItemArray]=useState([]);
const [btn,setbtn]=useState(false);
const [vid,setvid]=useState(null);
const setValue=(event)=>{
setitem(event.target.value);

}

const callTheValue=()=>{
    if(item!=="")
{setItemArray((old)=>{
    return [...old,item];
})
setitem("");

}
else{
    alert("please enter the value ✔️")
}
}

const deletee=(id)=>{

    setItemArray((olditem)=>{
return olditem.filter((arrayelemet,index)=>{
    return index!==id;
})
    })
}

const editTask=(id)=>{
    setbtn(true);
// let newitem=itemArray.find((elem)=>{
// return elem.id===id;
// })
    setitem(itemArray[id]);

setvid(id);
}
const editkrdo=()=>{
const newt=[...itemArray];
newt[vid]=item;
setItemArray(newt);
    setvid(null);
    setbtn(false);

}
const moveUp=(id)=>{
    
const newt=[...itemArray];
let temp=newt[id];
if(newt.length>1 && (id-1)>=0){
newt[id]=newt[id-1];
newt[id-1]=temp;
}
setItemArray(newt);
    
    console.log("move");
}

const moveDown=(id)=>{
    
const newt=[...itemArray];
if(newt.length>1 && (id+1)<newt.length){
    let temp=newt[id];
newt[id]=newt[id+1];
newt[id+1]=temp;
}
setItemArray(newt);
    
}
    return (
     
<>
<div className="container-fluid">

<div class="row">
    <div class="col-md-12 col-12 p-3 main">
       <div class="con container text-center">


           <h1 class="text-center m-3 head">Todo List  <i class="bi bi-pencil-square"></i></h1>
           <div class="internal">
                <input type="text" className="form-control me-2" id="gg" onChange={setValue} value={item} placeholder="add what need's to be done?"/>

               {btn?<button className="btn btn-outline-primary" id="add" onClick={editkrdo}><i class="bi bi-save2" id="s1"></i></button>:<button className="btn btn-outline-success" id="add" onClick={callTheValue}> <i class="fas fa-plus" id="b0"></i></button>
   }
   <div class="order">
                           <ol class="ul">
                        
{itemArray.map((value,index)=>{
return <List
    element={value}
    id={index}
    deletee={deletee}
    editTask={editTask}
    moveUp={moveUp}
    moveDown={moveDown}
    
/>
})
}   
                           </ol>
                        </div>
                       </div>
                   </div>
   
               </div>
           </div>
               </div>
</>

    )
}

export default App;
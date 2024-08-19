import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  let [todolist,settodolist] = useState([]);

  let save = (e) => {
    let toname = e.target.toname.value;

    if(!todolist.includes(toname)){

      let finallist = [...todolist,toname];
      settodolist(finallist);

    }else{
      alert("Element already exists!");
    }

      e.preventDefault();
  }

  let list = todolist.map((val,i)=>{
    return(
      <Todolistitem value = {val} key={i} idx ={i}
      todolist={todolist}
      settodolist = {settodolist}
      />
        
    )
  })

  return (
    <div className='App'>

      <h2>To Do List</h2>

      <form onSubmit={save}>

        <input type='text' name='toname'/>

        <button>Save</button>

      </form>

      <div className='outer'>

    <ul>
        {list}
    </ul>
      </div>

    </div>
  );
}

export default App;
function Todolistitem({ value, idx, todolist, settodolist }) {
  const deleteRow = () => {
    const finalData = todolist.filter((v, i) => i !== idx);
    settodolist(finalData);
  };
  let [status,setStatus] = useState(false);
   let checkstatus = ()=>{
     setStatus(!status);
   }
  return (
    <li className={(status) ?'completetodo':''} onClick={checkstatus}>
      {idx+1}
      {value}
      <span idx onClick={deleteRow} style={{ cursor: 'pointer', marginLeft: '10px' }}>
        &times;
      </span>
    </li>
  );
}

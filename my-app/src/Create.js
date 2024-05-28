import React from 'react';
import './App.css';
import axios from 'axios'
import { useState } from 'react';

function Create() {
  const [task,setTask] = useState()
  const handleAdd = ()  => {
    axios.post('http//localhost:3001/add',{task:task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
} 
 return (
    <div className="home">
      <div className="create_form input" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input type="text" name="" id="" placeholder="Enter the task"  onChange={(e) => setTask(e.target.value)}/>
        <button type="button" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default Create;

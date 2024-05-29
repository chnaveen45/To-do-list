import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    axios.post('http://localhost:3001/add', { task })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="home">
      <div className="create_form input" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input type="text" placeholder="Enter the task" onChange={(e) => setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default Create;

import React, { useState, useEffect } from 'react';
import Create from './Create';
import axios from 'axios';
import './App.css';
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';

function Home() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ id: null, task: '' });

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ id: todo._id, task: todo.task });
  };

  const handleInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, task: e.target.value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3001/update/${currentTodo.id}`, { task: currentTodo.task })
      .then(result => {
        setTodos(todos.map(todo => (todo._id === currentTodo.id ? result.data : todo)));
        setIsEditing(false);
        setCurrentTodo({ id: null, task: '' });
      })
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2 className="home">Todolist</h2>
      <Create />
      {isEditing ? (
        <div>
          <input type="text" value={currentTodo.task} onChange={handleInputChange} />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        todos.length === 0 ?
        <div className="home"><h2>No Record</h2></div> :
        todos.map(todo => (
          <div key={todo._id} className="task">
            <div className='checkbox'>
              <BsCircleFill className='icon' />
              {todo.task}
            </div>
            <div>
              <FaEdit className='icon' onClick={() => handleEditClick(todo)} />
              <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} /></span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;




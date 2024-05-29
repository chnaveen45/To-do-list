import React from 'react'
import Create from './Create'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs'
import { FaEdit } from "react-icons/fa";


function Home() {
    const [todos,setTodos] = useState([])
   
    useEffect(() => {
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    },[])

  

  return (
    <div>
        <h2 className="home">Todolist</h2>
        <Create />
        {
            todos.length === 0 ?
            <div className="home"><h2>No Record</h2></div>
            :
            todos.map(todo => (
                <div className="task"> 
                <div className = 'checkbox'>
                  <BsCircleFill className='icon'/>   
                    {todo.task}
                 </div>
                 <div>
                 <FaEdit className='tt' />
                  <span><BsFillTrashFill className='icon' /></span>
                  </div>
                  </div>
            ))
        }

    </div>
  )
}

export default Home;




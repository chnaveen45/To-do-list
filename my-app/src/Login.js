
import React, { useState } from 'react';
import axios from 'axios';
import "./Color.css"
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/login/${email}/${password}`
      );


      if (response.data) {
        alert("Login Successful");
        navigate("/home")
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.error(error);
      
    }
  };


  return (

    <div>
      <form onSubmit={handleLogin}>
        <label>
          <p class="label-txt">ENTER YOUR EMAIL</p>
          <input type="email" class="input" value={email} name="email" onChange={(e) => {
            setEmail(e.target.value)
          }} required />
          <div class="line-box">
            <div class="line"></div>
          </div>

        </label><br/>
        <label>
          <p class="label-txt">ENTER YOUR PASSWORD</p>
          <input type="password" name='password' class="input" value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} required />
          <div class="line-box">
            <div class="line"></div>
          </div>

        </label>
        <div>
          {/* <button type='submit' >Submit</button> */}
          <Link to="/home" className='lol'>Submit</Link>
        </div>

      </form>

    </div>
  )
}

export default Login;
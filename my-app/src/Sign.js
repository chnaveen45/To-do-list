
import React, { useState } from 'react'
import './Color.css'
import { Link} from 'react-router-dom';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Sign() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const go = async (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    try {
        const response = await axios.post('http://localhost:3001/postlogin', {
            name,
            email,
            password,

        })


        if (response.data.message === '1 document inserted') {
            alert('Registration successful');
            // Navigate("./Login")
        } else {
            alert('Registration failed');
        }
    } catch (error) {
        console.error(error);
    }
};


return (

    <div>
       
        <form onSubmit={go}  autoComplete='off'>

            <label>
                <p class="label-txt">ENTER YOUR NAME</p>
                <input type="text" class="input" value={name} onChange={(e) => {setName(e.target.value)} }
                 required />
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label><br/>
            <label>
                <p class="label-txt">ENTER YOUR EMAIL</p>
                <input type="email" class="input" value={email} onChange={(e) => {
                        setEmail(e.target.value)}} 
                 required />
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label><br/>
            <label>
                <p class="label-txt">ENTER YOUR PASSWORD</p>
                <input type="password" class="input" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} required></input>
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label><br/>
            <button type="submit">Submit</button>
            

            <div>

                <p>Already Have an account</p>
              
                <Link to="/login" className='lol'>Login</Link>
                {/* <Link to="/login" >Login</Link> */}
            </div>
        </form>

    </div>
)
}

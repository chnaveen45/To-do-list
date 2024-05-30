
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sign from './Sign';
import Login from './Login'; 
import Home from './Home'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Sign/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </Router>
    );
}

export default App;





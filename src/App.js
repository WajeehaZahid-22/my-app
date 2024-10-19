import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from "./Components/About"
import Contact from "./Components/Contact"
import Login from "./Components/login"
import Post from "./Components/Post"

function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
 export default App;
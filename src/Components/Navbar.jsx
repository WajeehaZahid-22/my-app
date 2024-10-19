import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
      <>
      <nav>
        <h1>Logo</h1>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/contact')}>Contact</li> 
          <button onClick={() => navigate('/login')}>Login</button> <br />
          <button  onClick={() => navigate('/post')}>Create Post</button>
        </ul>
      </nav>
      
      <footer>
        <p>Footer Content</p>
      </footer>

      </>
    </div>
  )
}

export default Navbar

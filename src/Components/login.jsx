import React, { useState } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './login.css'; // Import your CSS file

function Login() {
  const [user, loading, error] = useAuthState(auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login with Google
  async function handleLogin() {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  }

  // Logout function
  async function handleLogout() {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  }

  return (
    <div className="login-container">
      <form>
        <input placeholder='Email' />
        <input placeholder='Password' type='password' />
        <button type="button">Submit</button> <br /> <br />
        {user && isLoggedIn ? (
          <>
            <img src={user.photoURL} alt='User profile' />
            <h1>Congratulations, You are logged in {user.displayName}</h1>
            <button onClick={handleLogout}>Logout</button> <br />
          </> 
        ) : (
          <button onClick={handleLogin}>Login with Google</button>
        )}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
}

export default Login;



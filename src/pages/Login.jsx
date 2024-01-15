import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import { loginUser } from '../redux/slices/userSlice';

const Login = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const dispatch = useDispatch();

  const submiHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({email,password}));
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submiHandler}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
        <button type='submit'>login</button>
          {/* <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Login;

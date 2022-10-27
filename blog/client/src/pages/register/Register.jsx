import {Link} from "react-router-dom";
import './register.css';
import {useState} from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
    // if (const res = await axios.get("/api/register", {username})
    // }
    try{
      const res = await axios.post("/auth/register", {
        username, 
        email, 
        password,
      });
      res.data && window.location.replace("/login");
      console.log("new user!");
    } catch (err) {
      console.log("duplicate user");
      setError(true);
    }
  }

  return (
    <div className="register">
    <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          type="text" 
          className="registerInput" 
          placeholder="Enter your username..." 
          autoComplete="off"
          onChange={(e)=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input 
          type="text" 
          className="registerInput" 
          placeholder="Enter your email..." 
          autoComplete="off"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input 
          type="password" 
          className="registerInput" 
          placeholder="Enter your password..." 
          autoComplete="off"
          onChange={(e)=>setPassword(e.target.value)}
         />
        <button 
          className="registerButton" 
          type="submit">
            Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
        {error && <span style={{color:"red", marginTop:"1rem"}}>Something went wrong</span>}
    </div>
  )
}

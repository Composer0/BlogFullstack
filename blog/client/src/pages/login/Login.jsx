import {Link} from "react-router-dom";
import {Context} from "../../context/Context";
import './login.css'
import {useContext, useRef} from "react";
import axios from "axios"

export default function Login() {
  const userRef = useRef()
  const passwordRef = useRef()
  const {dispatch, isFetching } = useContext(Context)
  
const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch({
    type: "LOGIN_START"
  });
  try{
    const res = await axios.post("/admin/login" || "/auth/login", {
      username: userRef.current.value, 
      password: passwordRef.current.value
    })
    dispatch({type: "LOGIN_SUCCESS", payload:res.data})
  } catch(err) {
    dispatch({type: "LOGIN_FAILURE"})
  }
}

  // console.log(user);
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
      <form autoComplete="current-password" className="loginForm" 
      onSubmit={handleSubmit}
      >
        <label>Username</label>
        <input type="text" className="loginInput" autoComplete="Username" placeholder="Enter your Username..." 
        ref={userRef} 

        />
        <label>Password</label>
        <input type="password" className="loginInput" autoComplete="current-password" placeholder="Enter your password..." 
        ref={passwordRef}

        />
        <button className="loginButton" disabled={isFetching} type="submit">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  )
}

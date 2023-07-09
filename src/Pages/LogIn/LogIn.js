import Card from "../../components/Card/Card.js"
import { authAction } from "../../store/Auth"
import { userActions } from "../../store/User.js";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from './Login.module.css'


function LogIn() {
  const [message, setMessage] =useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logInHandler = async (event)=>{
    event.preventDefault()
    const response = await fetch("https://restapi-production-b64d.up.railway.app/getBlogUser",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        user: event.currentTarget.elements.username.value
      })
    })
    const user = await response.json()
    setMessage(user.message)
    if(user.userID){
      dispatch(userActions.setUser(user))
      dispatch(authAction.logIn())
      navigate("/profile", {replace: true})
    }
  }

  return (
    <div className="app">
     <Card>
       <h1>Welcome Please Log In or Sign Up</h1>
       <p>{message}</p>
       <form onSubmit={logInHandler}>
        <div className={classes.inputHolder}>
          <label htmlFor="userName">User Name</label>
          <input type="text" id="username"/>
        </div>
        <div className={classes.inputHolder}>
          <label htmlFor="password" >Password</label>
          <input type="password" id="password"/>
        </div>
        <button type="submit" >Log In</button>
       </form>
     </Card>
    </div>
  );
}

export default LogIn



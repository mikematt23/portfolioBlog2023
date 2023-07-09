import { authAction } from "../../store/Auth"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import LogIn from "../../Pages/LogIn/LogIn"



const Nav = (props)=>{
  const dispatch = useDispatch()
  const status = useSelector((state)=> state.auth.isLoggedIn)
  const [navItems,setNavItems] = useState([{a:'Log in',path:"/"}, {a:'Sign Up',path:"/signUp"}])
  
  useEffect(()=>{
    if(status){
     return  setNavItems(['Profile', 'All Blogs', 'Friend Blogs'])
    }
  },[status])

  const clickHandler=()=>{
    console.log('clicked')
    dispatch(authAction.logOut())
  }


  return(
    <nav>
      <ul>
        {navItems.map((item)=>{
          return <li key={item.a}><Link to={item.path}>{item.a}</Link></li>
        })}
      </ul>
      <button onClick={clickHandler}>click me</button>
    </nav>
  )
}

export default Nav
import { authAction } from "../../store/Auth"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {Link} from "react-router-dom"
import classes from './nav.module.css'

const Nav = (props)=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const status = useSelector((state)=> state.auth.isLoggedIn)
  const [navItems,setNavItems] = useState([{a:'Log in',path:"/"}, {a:'Sign Up',path:"/signUp"}])
  
  useEffect(()=>{
    if(status){
     setNavItems([{a:'Profile',path:"/profile"}, {a:'Posts',path:"/post"}, {a:'Friend Post',path:"/friendPosts"}])
    }else{
     setNavItems([{a:'Log in',path:"/"}, {a:'Sign Up',path:"/signUp"}])
    }
  },[status])

  const clickHandler=()=>{
    console.log('here')
    dispatch(authAction.logOut())
    navigate('/',{replace:true})
  }

  return(
    <nav className= {classes.nav}>
      <ul className={classes.navUl}>
        {navItems.map((item)=>{
          return <li className={classes.navLi} key={item.a}><Link to={item.path}>{item.a}</Link></li>
        })}
      </ul>
      <button onClick={clickHandler}>click me</button>
    </nav>
  )
}

export default Nav
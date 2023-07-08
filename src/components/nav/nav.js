import { authAction } from "../../store/Auth"
import { useDispatch, useSelector } from "react-redux"


const Nav = (props)=>{
  const dispatch = useDispatch()
  const status = useSelector((state)=> state.auth.isLoggedIn)
  console.log(status.toString())

  const clickHandler=(e)=>{
    dispatch(authAction.logOut())
  }
  return(
    <nav>
      <button onClick={clickHandler}>click me</button>
    </nav>
  )
}

export default Nav
import LogIn from "./Pages/LogIn/LogIn.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import Profile from "./Pages/Profile/Profile.js";
import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RootLayout from "./Pages/Root.js";

function App() {

  const router =createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout/>,
        children:[
          {path:'/',element :<LogIn/>},
          {path:'/signUp', element: <SignUp/>},
          {path:"/profile", element: <Profile/>}
        ]
      }
    ]
  )
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;

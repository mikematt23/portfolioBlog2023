import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./Auth"
import userSlice from "./User"

const store = configureStore({
  reducer :{
    auth:authReducer,
    user:userSlice
  }
})



export default store
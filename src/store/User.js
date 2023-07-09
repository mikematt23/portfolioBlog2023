import { createSlice } from "@reduxjs/toolkit"

const initialUserState = {
  user: {}
}

const userSlice = createSlice({
  name: "User",
  initialState :initialUserState,
  reducers:{
    setUser(state,user){
       state.user = user.payload
    }
  }
})

export const userActions = userSlice.actions
export default userSlice.reducer
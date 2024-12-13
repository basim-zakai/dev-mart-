import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    data:{},
    isLoggin:false
  },
  reducers: {
    addUser: (state,action) => {
        state.data = action.payload
        state.isLoggin = true
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    //   state.value += 1
    },

    removeUser:(state)=>{
        state.data ={}
        state.isLoggin = false

    }
    // decrement: state => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = UserSlice.actions

export default UserSlice.reducer
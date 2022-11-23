import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import axios from 'axios';

// Define a type for the slice state
interface AuthState {
  username: string;
  password: string;
  users?: any[];
}

export const testAPIcall = createAsyncThunk(
  'auth/testCall',
  async() => {
    return await axios.get("http://127.0.0.1:8000/api/lesson/").then((res)=>res.data)
  }
)

// Define the initial state using that type
const initialState: AuthState = {
  username: '',
  password: '',
  users: [],
}


export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<AuthState>) => {
    
      state.username = action.payload.username
      state.password = action.payload.password
    }
  },
  extraReducers: (builder) =>{
    builder
      .addCase(testAPIcall.pending, (state,action: PayloadAction<any>) =>{
        state.users = state.users&&[...state?.users,action.payload]
        console.log(action.payload)
      })
      .addCase(testAPIcall.fulfilled, (state,action: PayloadAction<any>) =>{
        state.users = state.users&&[...state?.users,action.payload]
        console.log(action.payload)
      })
      .addCase(testAPIcall.rejected, (state,action: PayloadAction<any>) =>{
        state.users = state.users&&[...state?.users,action.payload]
        console.log(action.payload)
      })
  }
})

export const {auth} = authSlice.actions

export const authReducer = authSlice.reducer
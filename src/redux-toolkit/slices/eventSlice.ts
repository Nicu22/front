import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import axios from 'axios';

export interface Event {
  id: number | string;
  name: string;
  startTime: Date;
  endTime: Date;
  type?: string;
  [key: string]: unknown;
}

export interface Events {
  [day: string]: Event[];
}

// Define a type for the slice state
interface EventState {
  monday: Event[],
  tuesday: Event[],
  wednesday: Event[],
  thursday: Event[],
  friday: Event[],
  saturday: Event[],
}
/*
export const testAPIcall = createAsyncThunk(
  'event/testCall',
  async(id: any) => {
    return await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>res.data)
  }
)*/

// Define the initial state using that type
const initialState: EventState = {
  monday:[{
    id: 1,
    name: 'test subject/teacher/cab nr',
    startTime: new Date("0001-01-01T09:45:00"),
    endTime: new Date("0001-01-01T11:15:00")
  },

],
  
  tuesday: [],
  wednesday: [{
    id: 2,
    name: "OOP/ Vdovicenco A./ 104",
    startTime: new Date("0001-01-01T13:30:00"),
    endTime: new Date("0001-01-01T15:00:00")
  }],
  thursday: [],
  friday: [{
    id: 3,
    name: 'test subject/teacher/cab nr',
    startTime: new Date("0001-01-01T09:45:00"),
    endTime: new Date("0001-01-01T11:15:00")
  },
],
  saturday: [],
}

export const eventSlice = createSlice({
  name: 'event',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    event: (state, action: PayloadAction<EventState>) => {
    
      //state.events = action.payload.events
    }
  },
  extraReducers: (builder) =>{
    builder
     /* .addCase(testAPIcall.pending, (state,action: PayloadAction<IDate>) =>{
        state.users = state.users&&[...state?.users,action.payload]
        console.log(action.payload)
      })
      .addCase(testAPIcall.fulfilled, (state,action: PayloadAction<IDate>) =>{
        state.users = state.users&&[...state?.users,action.payload]
        console.log(action.payload)
      })
      .addCase(testAPIcall.rejected, (state,action: PayloadAction<IDate>) =>{
        state.users = state.users&&[...state?.users,action.payload]
        console.log(action.payload)
      })*/
  }
})

// export const {} = eventSlice.actions

export const eventReducer = eventSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Event1
{
  title: string;
  group?:string;
  startTime: string;
  endTime: string;
  daysOfWeek: number[];
}

interface LessonState
{
  events:any[];
}

const initialState: LessonState= {
  events:[
    
      { 
      title:'event 1/ galcenco b./ 613 ', 
      startTime: '08:00',
      endTime:'09:30',
      daysOfWeek:[1],
    },
    { 
      title:'event 2', 
      startTime: '09:45',
      endTime:'11:15',
      daysOfWeek:[1]
    }
    ]}

export const eventSlice1 = createSlice({
  name: 'event',
  initialState,
  reducers: {
    event: (state, action: PayloadAction<any>) => {
      state.events=[...state.events,action.payload[0]]
      console.log(state.events)
      
    }
  }
})
export const {event} = eventSlice1.actions
export const eventReducer = eventSlice1.reducer
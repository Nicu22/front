import '@fullcalendar/react/dist/vdom';
import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import { useAppDispatch, useAppSelector } from '../redux-toolkit/hooks/hooks1';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Calendar } from '@fullcalendar/core';


const ScheduleTimetable: React.FC = () =>{
  const dispatch = useAppDispatch()
  const {users} = useAppSelector((state)=>({...state.auth}))
  //const {events} = useAppSelector((state)=>({...state.event}))
  const events =JSON.parse(localStorage.getItem('events')|| '{}') as any[]

    return<FullCalendar
        events={events}
        plugins={[timeGridPlugin ]}
        timeZone='local'
        eventColor='#2f6ca7'
        initialView="timeGridWeek"
        dayHeaderFormat={{weekday:'long'}}
        headerToolbar={false}
        expandRows={true}
        stickyHeaderDates ={true}
        height='100%'
        forceEventDuration={true}
        defaultTimedEventDuration='01:30'
        displayEventEnd={true}
        hiddenDays={[0]}
        allDaySlot={false}
        slotMinTime="08:00:00"
        slotMaxTime="20:15:00"
      />
    };
  export default ScheduleTimetable;
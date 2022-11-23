import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthForm from './components/AuthForm'
import BasicLayout1 from './components/BasicLayout1'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import { Provider } from 'react-redux'
import { store } from './redux-toolkit/store/store'
import PersonalCabinet from './components/PersonalCabinet'
import AuthLayout from './components/AuthLayout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        
        <Routes>
          <Route path="/" element={<BasicLayout1/>}/>
          <Route path="/login" element={<AuthLayout/>}/>
          <Route path="/schedule-maker" element={<PersonalCabinet/>}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import EventsPage from './components/EventsPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage/>
            </>
          } />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/events" element={<EventsPage/>} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

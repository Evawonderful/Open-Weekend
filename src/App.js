import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';

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

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

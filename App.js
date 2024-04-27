import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp'; // Note the capital 'S' in 'SignUp'
import NavBar from './NavBar';
import Form from './Form';
import Login from './Login'; // Import the Login component

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/signup" element={<SignUp />} /> {/* Use lowercase 'signup' */}
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login />} /> {/* Add the Login route */}
          {/* Add more routes here for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

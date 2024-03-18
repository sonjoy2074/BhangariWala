import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navPage';
import Footer from './components/footer/footerPage';

import Service from './components/services/service';
import Registration from './components/userAuthn/registration/registrationPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/navbar/navPage';
import Footer from './components/footer/footerPage';
import Service from './components/services/service';
function App() {
  return (
    <div className="App">
           <Navbar/>
           <Service/>
          <Footer/>
    </div>
  );
}

export default App;

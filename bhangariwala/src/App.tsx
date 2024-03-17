import React from 'react';
import './App.css';
import Navbar from './components/navbar/navPage';
import Footer from './components/footer/footerPage';
function App() {
  return (
    <div className="App">
         <Navbar/>
         <h1>Body</h1>
          <Footer/>
    </div>
  );
}

export default App;

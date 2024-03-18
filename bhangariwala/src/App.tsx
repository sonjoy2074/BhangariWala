import React from 'react';
import './App.css';
import Navbar from './components/navbar/navPage';
import Footer from './components/footer/footerPage';
import UserProfile from './components/user_profile/user_profile';
function App() {
  return (
    <div className="App">
         <Navbar/>
         <UserProfile />
          <Footer/>
    </div>
  );
}

export default App;

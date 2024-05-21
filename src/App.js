import React from 'react';
import './App.css';
import TopBar from'./components/TopBar';
import LandingPage from './components/LandingPage';
import StoreListing from './components/StoreListing';



function App() {
  return (
    
    <div>
    <TopBar />
    
    <LandingPage />

    <StoreListing />
    </div>
    
  );
}

export default App;

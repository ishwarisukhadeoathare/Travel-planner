// src/App.js
import React from 'react';
import './App.css';
import TravelForm from './components/TravelForm';
import DashboardCards from './components/DashboardCards';

function App() {
  return (
    <div className="app-container">
      <div className="cards-container">
        <div className="card-wrapper dark">
          <TravelForm theme="dark" />
        </div>
        <div className="card-wrapper light">
          <TravelForm theme="light" />
        </div>
        <DashboardCards />
      </div>
    </div>
  );
}

export default App;

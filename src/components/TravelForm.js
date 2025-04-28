// src/components/TravelForm.js
import React, { useState } from 'react';
import './TravelForm.css';

const TravelForm = ({ theme }) => {
  const [destination, setDestination] = useState('');
  const [travelType, setTravelType] = useState('');

  return (
    <div className={`travel-form ${theme}`}>
      <div className="status-bar">
        <div className="time">9:41</div>
        <div className="icons">
          <div className="signal-icon"></div>
          <div className="wifi-icon"></div>
          <div className="battery-icon"></div>
        </div>
      </div>
      
      <div className="form-content">
        <h1 className="title">Plan Your Journey, Your Way!</h1>
        <p className="subtitle">Let's create your personalised travel experience</p>
        
        <div className="form-group">
          <label>Where would you like to go?</label>
          <div className="input-container">
            <span className="input-icon">📍</span>
            <input 
              type="text" 
              placeholder="Enter Destination" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>How long will you stay?</label>
          <div className="select-container">
            <span className="input-icon">🗓️</span>
            <select>
              <option value="" disabled selected>Select Duration</option>
              <option value="weekend">Weekend</option>
              <option value="week">1 Week</option>
              <option value="two-weeks">2 Weeks</option>
              <option value="month">1 Month</option>
            </select>
            <span className="dropdown-icon">▼</span>
          </div>
        </div>
        
        <div className="form-group">
          <label>Who are you traveling with?</label>
          <div className="travel-options">
            <button 
              className={`travel-option ${travelType === 'solo' ? 'selected' : ''}`}
              onClick={() => setTravelType('solo')}
            >
              <span className="option-icon">👤</span>
              <span>Solo</span>
            </button>
            
            <button 
              className={`travel-option ${travelType === 'couple' ? 'selected' : ''}`}
              onClick={() => setTravelType('couple')}
            >
              <span className="option-icon">👫</span>
              <span>Couple</span>
            </button>
            
            <button 
              className={`travel-option ${travelType === 'family' ? 'selected' : ''}`}
              onClick={() => setTravelType('family')}
            >
              <span className="option-icon">👪</span>
              <span>Family</span>
            </button>
            
            <button 
              className={`travel-option ${travelType === 'friends' ? 'selected' : ''}`}
              onClick={() => setTravelType('friends')}
            >
              <span className="option-icon">👥</span>
              <span>Friends</span>
            </button>
          </div>
        </div>
        
        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
};

export default TravelForm;

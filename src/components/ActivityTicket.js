// src/components/ActivityTicket.js
import React from 'react';
import './ActivityTicket.css'; // Create this CSS file

const ActivityTicket = () => {
  return (
    <div className="activity-ticket">
      <div className="ticket-header">
        <span className="ticket-title">Day Plan</span>
        <span className="ticket-activities">14 Activities</span>
      </div>
      <div className="ticket-dates">
        <div className="date">
          <span className="day">SUN</span>
          <span className="number">26</span>
        </div>
        <div className="date active">
          <span className="day">MON</span>
          <span className="number">27</span>
        </div>
        <div className="date">
          <span className="day">TUE</span>
          <span className="number">28</span>
        </div>
        <div className="date">
          <span className="day">WED</span>
          <span className="number">29</span>
        </div>
        <div className="date">
          <span className="day">THU</span>
          <span className="number">30</span>
        </div>
        <div className="date">
          <span className="day">FRI</span>
          <span className="number">31</span>
        </div>
        <div className="date">
          <span className="day">FEB</span>
          <span className="number">1</span>
        </div>
      </div>
      <div className="ticket-section">
        <span className="ticket-section-title">Day 1 . 27.01.2025</span>
        <span className="ticket-activities-count"> & 3 Activities</span>
      </div>
      <div className="ticket-activity-card">
        <div className="activity-image"></div>
        <div className="activity-info">
          <span className="activity-name">Senso-ji Temple & Nakemise Shopping Street Senso-ji</span>
          <span className="activity-time">Timing: 8:15 am Morning</span>
          <span className="activity-duration">Duration: 3 hours</span>
          <span className="activity-pickup">Pick Up: From Hotel</span>
        </div>
      </div>
      <div className="ticket-activity-card">
        <div className="activity-image tokyo-sky"></div>
        <div className="activity-info">
          <span className="activity-name">Tokyo Sky Tree</span>
          <span className="activity-time">Timing: 1:00 pm Afternoon</span>
          <span className="activity-duration">Duration: 3 hours</span>
          <span className="activity-pickup">Pick Up: From Akamisa Street</span>
        </div>
      </div>
      <div className="ticket-activity-card">
        <div className="activity-image kimono"></div>
        <div className="activity-info">
          <span className="activity-name">Kimono Wearing</span>
          <span className="activity-time">Timing: Anytime before 8:00pm</span>
          <span className="activity-duration">Duration: 1-2 hours</span>
          <span className="activity-pickup">Pick Up: From Hotel</span>
        </div>
      </div>
      <div className="ticket-footer">
        <span className="ticket-see-all">Go to Spot</span>
      </div>
    </div>
  );
};

export default ActivityTicket;

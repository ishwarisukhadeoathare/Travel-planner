// src/components/DashboardCards.js
import React from "react";
import "./DashboardCards.css";
import tokyoImg from './assets/tokyo.jpeg';
import flightImg from './assets/flight.jpeg';

const dashboardData = [
  {
    theme: "dark",
    user: "Chhavi",
    trip: {
      city: "TOKYO",
      date: "27.01.2025 - 02.02.2025",
      duration: "6 Days",
      size: "4(2M, 2F)        Group Size ",
      activities: "14  Activities",
      flight: {
        img:flightImg,
        from: "DEL",
        to: "NRT",
        time: "26.01.2025, 10:50 am",
      },
      hotels: [
        {
          name: "Shinagawa Prince Hotel",
          nights: 2,
          status: "Confirmed",
          img: tokyoImg,
        },
        {
          name: "Mercure Tokyo Hotel",
          nights: 2,
          status: "Pending",
          img: tokyoImg,
        },
      ],
    },
  },
  {
    theme: "dark2", // for the center card with different nav
    user: "Chhavi",
    trip: {
      city: "TOKYO",
      date: "27.01.2025 - 02.02.2025",
      duration: "6 Days",
      size: "4(2M, 2F)        Group Size ",
      activities: "14  Activities",
      flight: {
        img:flightImg,
        from: "DEL",
        to: "NRT",
        time: "26.01.2025, 10:50 am",
      },
      hotels: [
        {
          name: "Shinagawa Prince Hotel",
          nights: 2,
          status: "Confirmed",
          img: tokyoImg,
        },
        {
          name: "Mercure Tokyo Hotel",
          nights: 2,
          status: "Pending",
          img: tokyoImg,
        },
      ],
    },
  },
  {
    theme: "light",
    user: "Chhavi",
    trip: {
      city: "TOKYO",
      date: "27.01.2025 - 02.02.2025",
      duration: "6 Days",
      size: "4(2M, 2F)        Group Size ",
      activities: "14  Activities",
      flight: {
        from: "DEL",
        to: "NRT",
        time: "26.01.2025, 10:50 am",
      },
      hotels: [
        {
          name: "Shinagawa Prince Hotel",
          nights: 2,
          status: "Confirmed",
          img: tokyoImg,
        },
        {
          name: "Mercure Tokyo Hotel",
          nights: 2,
          status: "Pending",
          img: tokyoImg,
        },
      ],
    },
  },
  {
    theme: "light2",
    user: "Chhavi",
    trip: {
      city: "TOKYO",
      date: "27.01.2025 - 02.02.2025",
      duration: "6 Days",
      size: "4(2M, 2F)        Group Size ",
      activities: "14  Activities",
      flight: {
        from: "DEL",
        to: "NRT",
        time: "26.01.2025, 10:50 am",
      },
      hotels: [
        {
          name: "Shinagawa Prince Hotel",
          nights: 2,
          status: "Confirmed",
          img: tokyoImg,
        },
        {
          name: "Mercure Tokyo Hotel",
          nights: 2,
          status: "Pending",
          img: tokyoImg,
        },
      ],
    },
  },
];

const DashboardCard = ({ data, variant }) => (
  <div className={`dashboard-card ${data.theme}`}>
    <div className="dashboard-header">
      <span className="dashboard-title">Main Dashboard</span>
      <div className="dashboard-statusbar">
        <span>9:41</span>
        <div className="dashboard-icons">
          <span>📶</span>
          <span>📡</span>
          <span>🔋</span>
        </div>
      </div>
    </div>
    <div className="dashboard-content">
      <div className="dashboard-greet">
        <span>Hello {data.user}!</span>
        <span className="dashboard-ready">Ready for the trip?</span>
        <span className="dashboard-avatar">C</span>
      </div>
      <div className="dashboard-section">
        <span className="dashboard-section-title">Your Upcoming Trip</span>
        <div className="dashboard-trip-card">
          <img src={data.trip.hotels[0].img} alt="Tokyo" className="dashboard-trip-img" />
          <div className="dashboard-trip-info">
            <span className="dashboard-trip-city">{data.trip.city}</span>
            <span className="dashboard-trip-date">{data.trip.date}</span>
            <div className="dashboard-trip-meta">
              <span>🕒 {data.trip.duration}</span>
              <span>🧑‍🤝‍🧑 {data.trip.size}</span>
              <span>📋 {data.trip.activities}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-section">
        <span className="dashboard-section-title">Flight Details</span>
        <div className="dashboard-flight-card">
          <div>
            <span className="dashboard-flight-route">{data.trip.flight.from} → {data.trip.flight.to}</span>
            <span className="dashboard-flight-time">{data.trip.flight.time}</span>
          </div>
          <span className="dashboard-flight-plane">✈️</span>
        </div>
      </div>
      <div className="dashboard-section">
        <span className="dashboard-section-title">Accomodation</span>
        <div className="dashboard-hotels">
          {data.trip.hotels.map((hotel, i) => (
            <div className="dashboard-hotel-card" key={i}>
              <img src={hotel.img} alt={hotel.name} className="dashboard-hotel-img" />
              <div className="dashboard-hotel-info">
                <span className="dashboard-hotel-name">{hotel.name}</span>
                <span className="dashboard-hotel-nights">{hotel.nights} Nights</span>
                <span className={`dashboard-hotel-status ${hotel.status.toLowerCase()}`}>{hotel.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {variant === "nav" && (
      <div className="dashboard-bottom-nav">
        <span className="dashboard-nav-item active">🏠</span>
        <span className="dashboard-nav-item">🔍</span>
        <span className="dashboard-nav-item">➕</span>
        <span className="dashboard-nav-item">♡</span>
        <span className="dashboard-nav-item">👤</span>
      </div>
    )}
  </div>
);

const DashboardCards = () => (
  <div className="dashboard-cards-row">
    <DashboardCard data={dashboardData[0]} />
    <DashboardCard data={dashboardData[1]} variant="nav" />
    <DashboardCard data={dashboardData[2]} />
  </div>
);

export default DashboardCards;

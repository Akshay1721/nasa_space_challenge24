import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import Module1 from './components/Module1';
import Module2 from './components/Module2';
import Module3 from './components/Module3';
import Badge from './components/Badge';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility'; // Single import for compatibility
import SatelliteMap from './SatelliteMap';
import Header from './components/Header';  // Import Header (Navbar)
import RainForcastMap from './components/RainForcastMap';
import Login from './components/Login';  // Import Login page
import Register from './components/Register';
import { SDG1Quiz } from './components/QuizModule';

const App = () => {
  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';  // Default API URL
    console.log(apiUrl);  // Check if the API URL is logged correctly

    // Make the API request
    axios.get(apiUrl)
      .then(response => {
        console.log('API Response:', response.data);  // Log the response data
      })
      .catch(error => {
        console.error('API error:', error);  // Log any error
      });
  }, []);

  const [progress, setProgress] = useState({
    module1: false,
    module2: false,
    module3: false,
  });

  const updateProgress = (module) => {
    setProgress((prevProgress) => ({ ...prevProgress, [module]: true }));
  };

  return (
    <Router>
      <div>
        {/* Add the Header (Navbar) on every page */}
        <Header />

        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Module 1: SDG Information */}
          <Route
            path="/sdg-info"
            element={<Module1 onComplete={() => updateProgress('module1')} />}
          />

          {/* Module 2: SDG Quiz */}
          <Route
            path="/module2"
            element={<Module2 onComplete={() => updateProgress('module2')} />}
          />

          {/* Module 3: Contribution */}
          <Route
            path="/module3"
            element={<Module3 onComplete={() => updateProgress('module3')} />}
          />

          {/* Badges */}
          <Route path="/badges" element={<Badge progress={progress} />} />

          {/* Map View */}
          <Route path="/map-view" element={<SatelliteMap />} />

          {/* Satellite View routes for different views */}
          <Route path="/satellite/water-storage" element={<SatelliteMap type="water-storage" />} />
          <Route path="/satellite/aqua-earth" element={<SatelliteMap type="aqua-earth" />} />
          <Route path="/satellite/source-info" element={<SatelliteMap type="source-info" />} />
          <Route path="/satellite/sea-level" element={<SatelliteMap type="sea-level" />} />

          {/* Articles Route (Placeholder) */}
          <Route path="/articles" element={<div>Articles Page</div>} />

          {/* Rain Forecast Map */}
          <Route path="/rainforcast-map" element={<RainForcastMap />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} /> {/* Ensure the Login page is routed */}
          {/* Register Route */}
          <Route path="/register" element={<Register />} /> {/* Ensure the Register page is routed */}
          <Route path="/sdg1-quiz" element={<SDG1Quiz />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

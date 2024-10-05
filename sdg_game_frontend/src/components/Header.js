import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white shadow-md relative z-50"> {/* Ensure high z-index for header */}
      <nav className="container mx-auto flex justify-between items-center">
        
        {/* Project Title */}
        <div>
          <h1 className="text-2xl font-bold">SDG Interactive Learning Game</h1>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-6 items-center">
          
          {/* Dropdown for Satellite Views */}
          <div className="relative group">
            <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md">
              Satellite View
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-md shadow-lg w-48 z-50"> {/* Ensure high z-index for dropdown */}
              <a href="https://eyes.nasa.gov/apps/earth/#/vital-signs/gravity-field-map/water-storage-monthly" target='_blank' rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200">
                Water Storage Satellite View
              </a>
              <a href="https://eyes.nasa.gov/apps/earth/#/satellites/aqua" target='_blank' rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200">
                Aqua Earth Satellite
              </a>
              <a href="https://gpm.nasa.gov/education/articles/nasa-earth-science-water-cycle#:~:text=The%20ocean%20plays%20a%20key,of%2086%25%20of%20global%20evaporation." target='_blank' rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200">
                Source Info
              </a>
              <Link to="/rainforcast-map" className="block px-4 py-2 hover:bg-gray-200">
                Rain Forecast Map
              </Link>
            </div>
          </div>
          
          {/* Map View Button */}
          <Link to="/map-view" className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md">
            Map View
          </Link>
          
          {/* Articles Button */}
          <Link to="/articles" className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md">
            Articles
          </Link>

          {/* Start Your Quest Button */}
          <Link to="/sdg-info" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Login
          </Link>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;

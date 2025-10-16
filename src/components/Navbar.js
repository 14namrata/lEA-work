import React, { useState } from 'react';
import { FaUser, FaCog, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData] = useState({
    userName: 'ARAMS USER 1',
    email: 'arams.user@example.com',
    role: 'Admin'
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {
    // Navigate to profile page or open profile modal
    console.log('Profile clicked');
    setIsDropdownOpen(false);
  };

  const handleSettingsClick = () => {
    // Navigate to settings page
    console.log('Settings clicked');
    setIsDropdownOpen(false);
  };

  const handleLogoutClick = () => {
    // Handle logout functionality
    console.log('Logout clicked');
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-brand">
          
        </div>
        
        <div className="navbar-profile">
          <div className="profile-dropdown">
            <button 
              className="profile-button"
              onClick={toggleDropdown}
              aria-label="Profile menu"
            >
              <div className="profile-icon">
                <FaUser />
              </div>
              <FaChevronDown className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <div className="user-info">
                    <div className="user-name">{userData.userName}</div>
                    <div className="user-email">{userData.email}</div>
                    <div className="user-role">{userData.role}</div>
                  </div>
                </div>
                
                <div className="dropdown-divider"></div>
                
                <div className="dropdown-items">
                  <button 
                    className="dropdown-item"
                    onClick={handleProfileClick}
                  >
                    <FaUser className="dropdown-item-icon" />
                    <span>Profile</span>
                  </button>
                  
                  <button 
                    className="dropdown-item"
                    onClick={handleSettingsClick}
                  >
                    <FaCog className="dropdown-item-icon" />
                    <span>Settings</span>
                  </button>
                  
                  <div className="dropdown-divider"></div>
                  
                  <button 
                    className="dropdown-item logout"
                    onClick={handleLogoutClick}
                  >
                    <FaSignOutAlt className="dropdown-item-icon" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Overlay to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          className="dropdown-overlay"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;

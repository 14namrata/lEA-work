import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUserPlus, FaUserCheck, FaUsers } from 'react-icons/fa';
import './HeaderTabs.css';

const HeaderTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    if (location.pathname.includes('add-role')) setActiveTab('add-role');
    else if (location.pathname.includes('assign-role')) setActiveTab('assign-role');
    else if (location.pathname.includes('user-management')) setActiveTab('user-management');
  }, [location.pathname]);

  const handleTabClick = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <div className="header-tabs">
      <div
        className={`tab ${activeTab === 'add-role' ? 'active' : ''}`}
        onClick={() => handleTabClick('add-role', '/add-role')}
      >
        <FaUserPlus className="icon" />
        <span>Add Role</span>
      </div>
      <div
        className={`tab ${activeTab === 'assign-role' ? 'active' : ''}`}
        onClick={() => handleTabClick('assign-role', '/assign-role')}
      >
        <FaUserCheck className="icon" />
        <span>Assign Role</span>
      </div>
      <div
        className={`tab ${activeTab === 'user-management' ? 'active' : ''}`}
        onClick={() => handleTabClick('user-management', '/user-management')}
      >
        <FaUsers className="icon" />
        <span>User Management</span>
      </div>
    </div>
  );
};

export default HeaderTabs;

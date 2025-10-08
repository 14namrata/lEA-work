import React, { useState } from "react";
import "./AssignRolePage.css";

const AssignRoleMain = () => {
  const [showAssignForm, setShowAssignForm] = useState(false);
  const [activeTab, setActiveTab] = useState("role"); // role | jurisdiction
  const [searchTerm, setSearchTerm] = useState("");

  const roles = [
    "Role 1", "Role 2", "Role 3", "Role 4",
    "Role 5", "Role 6", "Role 7"
  ];

  return (
    <div className="assigned-container">
      {/* 🔍 Top Section */}
      <div className="um-top-section">
        <input
          type="text"
          className="um-search-input"
          placeholder="Search User"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="um-add-button"
          onClick={() => setShowAssignForm(!showAssignForm)}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>

      {/* 📋 Roles List */}
      <div className="role-scroll">
        <ul className="role-list">
          {roles
            .filter((role) =>
              role.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((role, index) => (
              <li key={index} className={index % 2 === 0 ? "even" : ""}>
                {role}
              </li>
            ))}
        </ul>
      </div>

      {/* ⬇️ Assign Form (shows when clicking +) */}
      {showAssignForm && (
        <div className="assign-form-box">
          {/* 🟦 Tabs */}
          <div className="assign-tabs">
            <button
              className={`tab-btn ${activeTab === "role" ? "active" : ""}`}
              onClick={() => setActiveTab("role")}
            >
              <i className="fas fa-user"></i> Role
            </button>
            <button
              className={`tab-btn ${activeTab === "jurisdiction" ? "active" : ""}`}
              onClick={() => setActiveTab("jurisdiction")}
            >
              <i className="fas fa-landmark"></i> Jurisdiction
            </button>
          </div>

          {/* 📂 Available & Assigned Section */}
          <div className="assign-content">
            {/* Available */}
            <div className="assign-list">
              <div className="list-header">
                <h4>Available</h4>
                <span className="item-count">1</span>
              </div>
              <input
                type="text"
                placeholder={`Search Available ${activeTab}...`}
                className="list-search"
              />
              <ul className="list-box">
                {activeTab === "role" ? (
                  <li>Role Type</li>
                ) : (
                  <li>Jurisdiction Type</li>
                )}
              </ul>
            </div>

            {/* Controls */}
            <div className="assign-controls">
              <button className="assign-btn green">{">>"}</button>
              <button className="assign-btn red">{"<<"}</button>
              <button
                className="assign-btn cancel"
                onClick={() => setShowAssignForm(false)}
              >
                <i className="fas fa-times-circle"></i> Cancel
              </button>
            </div>

            {/* Assigned */}
            <div className="assign-list">
              <div className="list-header">
                <h4>Assigned</h4>
                <span className="item-count">13</span>
              </div>
              <input
                type="text"
                placeholder={`Search Assigned ${activeTab}...`}
                className="list-search"
              />
              <ul className="list-box">
                {activeTab === "role" ? (
                  <>
                    <li>Role A</li>
                    <li>Role B</li>
                  </>
                ) : (
                  <>
                    <li><em>BLOCK</em></li>
                    <li>Adokgre</li>
                    <li>Amlarem</li>
                    <li>Asanang</li>
                    <li>Bagendoba</li>
                    <li>Baghmara</li>
                    <li>Betasing</li>
                    <li>Bhoi-Rymbong</li>
                    <li>Chokpot</li>
                    <li>Dadenggre</li>
                    <li>Dalu</li>
                    <li>Damalgre</li>
                    <li>Demdema</li>
                    <li>Gambegre</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignRoleMain;

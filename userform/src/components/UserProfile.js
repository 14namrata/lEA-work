import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { FaUser, FaCog, FaList, FaEnvelope, FaEdit, FaSave, FaTimes, FaBars } from 'react-icons/fa';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userData, setUserData] = useState({
    userName: 'ARAMS USER 1',
    email: 'arams.user@example.com',
    designation: 'Chief Engineer',
    role: 'Admin',
    phone: '+91 1234567890',
    department: 'Public Works Department',
    location: 'Guwahati, Assam'
  });

  const [editData, setEditData] = useState({ ...userData });

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...userData });
  };

  const handleSave = () => {
    setUserData({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...userData });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Detect small screens and toggle mobile mode
  useEffect(() => {
    const query = window.matchMedia('(max-width: 576px)');
    const handler = (e) => setIsMobile(e.matches);
    handler(query); // initial
    query.addEventListener ? query.addEventListener('change', handler) : query.addListener(handler);
    return () => {
      query.removeEventListener ? query.removeEventListener('change', handler) : query.removeListener(handler);
    };
  }, []);

  // Auto-open modal on mount for mobile for direct access to fields
  useEffect(() => {
    if (isMobile) {
      setIsMobileModalOpen(true);
    }
  }, [isMobile]);

  const openTab = (tabKey) => {
    setActiveTab(tabKey);
    if (isMobile) {
      setIsMobileModalOpen(true);
    }
    setIsMobileMenuOpen(false);
  };

  const renderProfileContent = () => {
    if (activeTab === 'profile') {
      return (
        <div className="profile-content">
          <div className="profile-header">
            <h2>Profile</h2>
            <div className="profile-actions">
              {!isEditing ? (
                <button className="edit-btn" onClick={handleEdit}>
                  <FaEdit /> Edit Profile
                </button>
              ) : (
                <div className="edit-actions">
                  <button className="save-btn" onClick={handleSave}>
                    <FaSave /> Save
                  </button>
                  <button className="cancel-btn" onClick={handleCancel}>
                    <FaTimes /> Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="profile-separator"></div>
          
          <div className="profile-details">
            <div className="detail-group">
              <label>User Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.userName}
                  onChange={(e) => handleInputChange('userName', e.target.value)}
                  className="profile-input"
                />
              ) : (
                <div className="profile-value">{userData.userName}</div>
              )}
            </div>

            <div className="detail-group">
              <label>Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={editData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="profile-input"
                />
              ) : (
                <div className="profile-value">{userData.email}</div>
              )}
            </div>

            <div className="detail-group">
              <label>Designation</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.designation}
                  onChange={(e) => handleInputChange('designation', e.target.value)}
                  className="profile-input"
                />
              ) : (
                <div className="profile-value">{userData.designation}</div>
              )}
            </div>

            <div className="detail-group">
              <label>Role</label>
              {isEditing ? (
                <select
                  value={editData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="profile-input"
                >
                  <option value="Admin">Admin</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Operator">Operator</option>
                </select>
              ) : (
                <div className="profile-value">{userData.role}</div>
              )}
            </div>

            <div className="detail-group">
              <label>Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="profile-input"
                />
              ) : (
                <div className="profile-value">{userData.phone}</div>
              )}
            </div>

            <div className="detail-group">
              <label>Department</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="profile-input"
                />
              ) : (
                <div className="profile-value">{userData.department}</div>
              )}
            </div>

            <div className="detail-group">
              <label>Location</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="profile-input"
                />
              ) : (
                <div className="profile-value">{userData.location}</div>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'assigned-roles') {
      return (
        <div className="profile-content">
          <h2>Assigned Roles</h2>
          <div className="profile-separator"></div>
          <div className="roles-list">
            <div className="role-item">
              <div className="role-name">System Administrator</div>
              <div className="role-description">Full system access and user management</div>
            </div>
            <div className="role-item">
              <div className="role-name">Data Manager</div>
              <div className="role-description">Manage road asset data and reports</div>
            </div>
            <div className="role-item">
              <div className="role-name">Bridge Inspector</div>
              <div className="role-description">Inspect and rate bridge conditions</div>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'assigned-jurisdiction') {
      return (
        <div className="profile-content">
          <h2>Assigned Jurisdiction</h2>
          <div className="profile-separator"></div>
          <div className="jurisdiction-list">
            <div className="jurisdiction-item">
              <div className="jurisdiction-name">Guwahati District</div>
              <div className="jurisdiction-type">Primary</div>
            </div>
            <div className="jurisdiction-item">
              <div className="jurisdiction-name">Kamrup Metro</div>
              <div className="jurisdiction-type">Secondary</div>
            </div>
            <div className="jurisdiction-item">
              <div className="jurisdiction-name">Assam State Highways</div>
              <div className="jurisdiction-type">Regional</div>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'contact') {
      return (
        <div className="profile-content">
          <h2>Contact Information</h2>
          <div className="profile-separator"></div>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-label">Office Address</div>
              <div className="contact-value">
                Public Works Department<br />
                Assam Secretariat, Dispur<br />
                Guwahati - 781006, Assam
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Emergency Contact</div>
              <div className="contact-value">+91 1234567890</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Support Email</div>
              <div className="contact-value">support@arams.gov.in</div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="user-profile-container">
      <div className="profile-sidebar">
        <div className="user-info">
          <div className="user-avatar">
            <FaUser />
          </div>
          <div className="user-name">{userData.userName}</div>
        </div>

        <nav className="profile-nav">
          <button
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => openTab('profile')}
          >
            <FaUser className="nav-icon" />
            Profile
          </button>
          <button
            className={`nav-item ${activeTab === 'assigned-roles' ? 'active' : ''}`}
            onClick={() => openTab('assigned-roles')}
          >
            <FaCog className="nav-icon" />
            Assigned Roles
          </button>
          <button
            className={`nav-item ${activeTab === 'assigned-jurisdiction' ? 'active' : ''}`}
            onClick={() => openTab('assigned-jurisdiction')}
          >
            <FaList className="nav-icon" />
            Assigned Jurisdiction
          </button>
          <button
            className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => openTab('contact')}
          >
            <FaEnvelope className="nav-icon" />
            Contact
          </button>
        </nav>
      </div>

      {/* Desktop content area. On mobile, we move content into a modal. */}
      {!isMobile && (
        <div className="profile-main">
          {renderProfileContent()}
        </div>
      )}

      {/* Mobile modal */}
      {isMobile && isMobileModalOpen && (
        <div className="mobile-modal-overlay">
          <div className="mobile-modal" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-profile-icon" aria-hidden="true">
              <FaUser />
            </div>
            <div className="mobile-topbar">
              <button className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(prev => !prev)} aria-label="Menu">
                <FaBars />
              </button>
              {isMobileMenuOpen && (
                <div className="mobile-menu">
                  <button className={`mobile-menu-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => openTab('profile')}>
                    <FaUser className="nav-icon" /> Profile
                  </button>
                  <button className={`mobile-menu-item ${activeTab === 'assigned-roles' ? 'active' : ''}`} onClick={() => openTab('assigned-roles')}>
                    <FaCog className="nav-icon" /> Assigned Roles
                  </button>
                  <button className={`mobile-menu-item ${activeTab === 'assigned-jurisdiction' ? 'active' : ''}`} onClick={() => openTab('assigned-jurisdiction')}>
                    <FaList className="nav-icon" /> Assigned Jurisdiction
                  </button>
                  <button className={`mobile-menu-item ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => openTab('contact')}>
                    <FaEnvelope className="nav-icon" /> Contact
                  </button>
                </div>
              )}
            </div>
            <div className="mobile-modal-body">
              {renderProfileContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

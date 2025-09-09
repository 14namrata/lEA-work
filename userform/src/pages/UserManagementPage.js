import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './UserManagementPage.css';

const usersData = [
  { uid: 99, name: 'achyutha' },
  { uid: 185, name: 'AE_11' },
  { uid: 186, name: 'AE_12' },
  { uid: 187, name: 'AE_13' },
  { uid: 188, name: 'AE_14' },
  { uid: 189, name: 'AE_15' },
  { uid: 904, name: 'AE_AMPATI_1' },
  { uid: 1200, name: 'AE_AMPATI_10' },
  { uid: 1191, name: 'AE_AMPATI_2' },
];

const UserManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState(usersData);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    if (formData.username && formData.password === formData.confirmPassword) {
      const newUser = {
        uid: users.length + 1,
        name: formData.username,
      };
      setUsers([...users, newUser]);
      setFormData({ username: '', password: '', confirmPassword: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="um-container">
      <h2 className="um-title">Users Available</h2>

      <div className="um-top-section">
        <input
          type="text"
          className="um-search-input"
          placeholder="Search User"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="um-add-button" onClick={() => setShowForm(true)}>
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <div className="um-table-wrapper">
        <table className="um-user-table">
          <thead>
            <tr>
              <th>UID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.uid}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="um-modal-overlay">
          <div className="um-modal">
            <h3 className="um-modal-title">Add New User</h3>
            <label>Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="Enter username"
            />
            <label>Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Enter password"
            />
            <label>Confirm Password</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              placeholder="Confirm password"
            />

            <div className="um-modal-actions">
              <button className="um-save-button" onClick={handleSave}>
                <i className="fas fa-save"></i> Save
              </button>
              <button
                className="um-cancel-button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagementPage;

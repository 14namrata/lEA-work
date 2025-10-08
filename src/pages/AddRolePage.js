import React, { useState } from 'react';
import './AddRolePage.css';

const AddRolePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', description: '' });

  // Store roles in state so new ones can be added dynamically
  const [roles, setRoles] = useState([
    { name: 'ADD_AND_ASSIGN_ROLE', description: 'ADD AND ASSIGN ROLE' },
    { name: 'ADD_JURISDICTION_NCIS', description: 'add jurisdiction' },
    { name: 'ADD_ROLE', description: 'ADD ROLE' },
    { name: 'ASSIGN_ROLE', description: 'ASSIGN ROLE' },
    { name: 'BIS_ADD_DATA', description: 'BIS Add Data' },
    { name: 'BIS_CONDITION_RATING', description: 'BIS CONDITION RATING' },
    { name: 'BIS_DELETE', description: 'Delete Bridge' },
    { name: 'ASSIGN_ROLE', description: 'ASSIGN ROLE' },
    { name: 'BIS_ADD_DATA', description: 'BIS Add Data' },
    { name: 'BIS_CONDITION_RATING', description: 'BIS CONDITION RATING' },
    { name: 'BIS_DELETE', description: 'Delete Bridge' }
  ]);

  const handleSave = () => {
    if (!formData.name || !formData.description) {
      alert('Please fill out both fields.');
      return;
    }

    const newRole = {
      name: formData.name,
      description: formData.description
    };

    setRoles(prevRoles => [...prevRoles, newRole]);

    // Clear form and close modal
    setFormData({ name: '', description: '' });
    setShowForm(false);
  };

  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="add-role-container">
      <h2 className="add-role-heading">Roles Available</h2>

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
      
      <div className="add-role-table-wrapper">
        <table className="add-role-table">
          <thead>
            <tr>
              <th>Role Name</th>
              <th>Role Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredRoles.map((role, index) => (
              <tr key={index}>
                <td>{role.name}</td>
                <td>{role.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Role</h3>
            <label>Role Name</label>
            <input
              type="text"
              placeholder="Role Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label>Role Description</label>
            <input
              type="text"
              placeholder="Role Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <button className="add-role-save-button" onClick={handleSave}>
              <i className="fas fa-save"></i> Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRolePage;
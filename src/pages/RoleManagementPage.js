import React from "react";
import { Link } from "react-router-dom";

const RoleManagementPage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Role Management</h2>
      <div style={{ marginTop: "20px" }}>
        <Link to="/add-role">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Add Role</button>
        </Link>
        <Link to="/assign-role">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Assign Role</button>
        </Link>
        <Link to="/user-management">
          <button style={{ margin: "10px", padding: "10px 20px" }}>User Management</button>
        </Link>
      </div>
    </div>
  );
};

export default RoleManagementPage;

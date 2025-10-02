import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HeaderTabs from "./components/HeaderTabs";
import UserProfile from "./components/UserProfile";
import AddRolePage from "./pages/AddRolePage";
import AssignRolePage from "./pages/AssignRolePage";
import UserManagementPage from "./pages/UserManagementPage";
import RoleManagementPage from "./pages/RoleManagementPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

// Wrapper to conditionally show HeaderTabs
const Layout = ({ children }) => {
  const location = useLocation();

  // Show HeaderTabs only on these routes
  const showHeaderTabs = ["/add-role", "/assign-role", "/user-management", "/role-management"].includes(
    location.pathname
  );

  return (
    <div>
      {showHeaderTabs && <HeaderTabs />}
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home (Dashboard) */}
          <Route path="/" element={<Dashboard />} />

          {/* User Profile */}
          <Route path="/profile" element={<UserProfile />} />

          {/* Role Management Section */}
          <Route path="/add-role" element={<AddRolePage />} />
          <Route path="/assign-role" element={<AssignRolePage />} />
          <Route path="/user-management" element={<UserManagementPage />} />
          <Route path="/role-management" element={<RoleManagementPage />} />

          {/* Fallback */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

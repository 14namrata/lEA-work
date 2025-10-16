import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HeaderTabs from "./components/HeaderTabs";
import AddRolePage from "./pages/AddRolePage";
import AssignRolePage from "./pages/AssignRolePage";
import UserManagementPage from "./pages/UserManagementPage";
import RoleManagementPage from "./pages/RoleManagementPage";
import NavbarPage from "./pages/NavbarPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import UserProfile from "./components/UserProfile";

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

          {/* Role Management Section */}
          <Route path="/add-role" element={<AddRolePage />} />
          <Route path="/assign-role" element={<AssignRolePage />} />
          <Route path="/user-management" element={<UserManagementPage />} />
          <Route path="/role-management" element={<RoleManagementPage />} />
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path="/navbar" element={<NavbarPage />} />
          {/* Fallback */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

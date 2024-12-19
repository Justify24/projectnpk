import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import LoginPage from "./pages/landing/login";
import RegisterPage from "./pages/landing/register";
import DashboardUser from "./pages/landing/users/dashboard";
import AnalisisAlat from "./pages/landing/users/analisis-alat";
import History from "./pages/landing/users/history";
import AccountSettings from "./pages/landing/users/accountsettings";
import Hasilanalisaalat from "./pages/landing/users/hasilanalisaalat";
import Hasilanalisalahan from "./pages/landing/users/hasilanalisalahan";
import Dashboard2 from "./pages/landing/users/dashboard2";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Landing (non login) */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Users */}
          <Route path="/dashboard2" element={<DashboardUser />} />
          <Route path="/dashboard" element={<Dashboard2 />} />
          <Route path="/analisis-alat" element={<AnalisisAlat />} />
          <Route path="/history" element={<History />} />
          <Route path="/accountsettings" element={<AccountSettings />} />
          <Route path="/hasilanalisaalat" element={<Hasilanalisaalat/>} />
          <Route path="/hasilanalisalahan" element={<Hasilanalisalahan/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

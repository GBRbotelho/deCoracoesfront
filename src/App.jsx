import React, { useEffect } from "react";
import {
  Routes as Router,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Index from "./pages/Home/@Index";
import Checkout from "./pages/Checkout/@Index";
import Authorized from "./pages/Authorized/@Index";
import Pending from "./pages/pending/@Index";
import Negada from "./pages/negada/@Index";
import DashboardLayout from "./components/Layout/DashbaordLayout";
import Clients from "./pages/Dashboard/Clients";
import Subscriptions from "./pages/Dashboard/Subscriptions";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Route path="/" element={<Index />} />
      <Route path="/checkout/:slug" element={<Checkout />} />
      <Route path="/authorized" element={<Authorized />} />
      <Route path="/pending" element={<Pending />} />
      <Route path="/negada" element={<Negada />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <div></div>
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/clients"
        element={
          <DashboardLayout>
            <Clients />
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/subscriptions"
        element={
          <DashboardLayout>
            <Subscriptions />
          </DashboardLayout>
        }
      />
    </Router>
  );
}

export default App;

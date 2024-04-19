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
import BoxStar2 from "./pages/BoxStar 2 Lugares/@Index";
import Authorized from "./pages/authorized/@Index";
import Pending from "./pages/pending/@Index";
import Negada from "./pages/negada/@Index";

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
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout/boxstar2" element={<BoxStar2 />} />
      <Route path="/authorized" element={<Authorized />} />
      <Route path="/pending" element={<Pending />} />
      <Route path="/negada" element={<Negada />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Router>
  );
}

export default App;

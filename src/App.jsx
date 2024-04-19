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
import BoxStar2 from "./pages/BoxStar 2 Lugares/@Index";
import BoxStar4 from "./pages/BoxStar 4 Lugares/@Index";
import BoxStar6 from "./pages/BoxStar 6 Lugares/@Index";
import BoxStar8 from "./pages/BoxStar 8 Lugares/@Index";
import BoxStar12 from "./pages/BoxStar 12 Lugares/@Index";
import BoxPremium4 from "./pages/BoxPremium 4/@Index";
import BoxPremium6 from "./pages/BoxPremium 6/@Index";
import BoxPremium8 from "./pages/BoxPremium 8/@Index";
import BoxPremium12 from "./pages/BoxPremium 12/@Index";

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
      <Route path="/checkout/boxstar4" element={<BoxStar4 />} />
      <Route path="/checkout/boxstar6" element={<BoxStar6 />} />
      <Route path="/checkout/boxstar8" element={<BoxStar8 />} />
      <Route path="/checkout/boxstar12" element={<BoxStar12 />} />
      <Route path="/checkout/boxpremium4" element={<BoxPremium4 />} />
      <Route path="/checkout/boxpremium6" element={<BoxPremium6 />} />
      <Route path="/checkout/boxpremium8" element={<BoxPremium8 />} />
      <Route path="/checkout/boxpremium12" element={<BoxPremium12 />} />
      <Route path="/authorized" element={<Authorized />} />
      <Route path="/pending" element={<Pending />} />
      <Route path="/negada" element={<Negada />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Router>
  );
}

export default App;

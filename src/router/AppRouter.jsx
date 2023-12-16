import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import BrandsPage from "../pages/BrandsPage";
import AboutPage from "../pages/AboutPage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CustomersPage from "../pages/CustomersPage";
import BrandPage from "../pages/BrandPage";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/brands/:name/:id" element={<BrandPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/customers" element={<CustomersPage />} />

          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default AppRouter;

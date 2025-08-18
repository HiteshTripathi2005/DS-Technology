import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductInfo from "./pages/ProductInfo";
import AboutUs from "./pages/AboutUs";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import NoRoute from "./pages/NoRoute";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductInfo />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<NoRoute />} />
          </Routes>
        </div>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

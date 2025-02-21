import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&auto=format"
          alt="Medical Equipment Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Premium Medical Equipment Supplier
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 px-4">
            Your trusted partner in providing high-quality medical equipment and
            supplies for hospitals, clinics, and healthcare facilities. Bulk
            orders available with competitive pricing.
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-colors text-lg font-semibold"
            >
              View Equipment Catalog
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

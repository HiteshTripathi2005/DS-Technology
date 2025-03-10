import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&auto=format"
          alt="Surgical Instruments Background"
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
            Dharmraj Surgical Technologies
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-4 px-4">
            Leading manufacturer, exporter, and service provider of high-quality
            surgical instruments for healthcare professionals worldwide.
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-8 px-4">
            Precision-engineered instruments with{" "}
            <span className="text-teal-400 font-bold">
              expert repair services
            </span>{" "}
            available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-colors text-lg font-semibold"
              >
                View Instrument Catalog
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-800 transition-colors text-lg font-semibold"
              >
                About Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

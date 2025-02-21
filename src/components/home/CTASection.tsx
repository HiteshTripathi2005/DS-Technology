import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-teal-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Equip Your Facility
          </motion.h2>
          <p className="text-lg md:text-xl text-teal-100 mb-8">
            Discover our comprehensive range of medical equipment with special
            pricing for bulk orders.
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-800 px-8 py-4 rounded-full hover:bg-teal-50 transition-colors text-lg font-semibold"
            >
              Request Quote
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const NoRoute = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-8xl font-light text-gray-900 tracking-tight">
              404
            </h1>

            <h2 className="text-xl font-normal text-gray-600">
              Page not found
            </h2>

            <p className="text-gray-500 text-sm max-w-sm mx-auto">
              The page you're looking for doesn't exist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition-colors duration-200">
                <FiHome className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NoRoute;

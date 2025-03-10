import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800"
          >
            Contact Dharmraj Surgical Technologies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-900">
                Contact Information
              </h3>
              <div className="space-y-4 text-teal-700">
                <p className="flex items-start">
                  <span className="mr-2 mt-1">📍</span>
                  <span>
                    Shop No 01, Delta Residency, Guru Kripa Complex, Opp. Sai
                    City, Nalasopara (W), Dist - Palghar 401203
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span> Sales: +91 9359333692
                </p>
                <p className="flex items-center max-sm:text-sm max-lg:text-sm">
                  <span className="mr-2 ">✉️</span>{" "}
                  dharmrajsurgicaltechnologies@gmail.com
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-900">
                Our Services
              </h3>
              <div className="space-y-4 text-teal-700">
                <p className="flex items-start">
                  <span className="mr-2 mt-1">🔧</span>
                  <span>
                    Manufacturing of high-quality surgical instruments
                  </span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2 mt-1">⚙️</span>
                  <span>Expert repair and maintenance services</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2 mt-1">🌎</span>
                  <span>Export to healthcare facilities worldwide</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2 mt-1">📦</span>
                  <span>Custom orders and bulk supply available</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

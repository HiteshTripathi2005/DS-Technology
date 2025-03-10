import { motion } from "framer-motion";

const CompanyListingsSection = () => {
  const instrumentCategories = [
    {
      name: "General Surgery",
      icon: "🔪",
      description: "Precision instruments for general surgical procedures",
    },
    {
      name: "Orthopedic",
      icon: "🦴",
      description: "Specialized tools for bone and joint surgeries",
    },
    {
      name: "Dental & Oral",
      icon: "🦷",
      description: "Instruments for dental and oral surgical procedures",
    },
    {
      name: "ENT",
      icon: "👂",
      description: "Specialized tools for ear, nose, and throat procedures",
    },
    {
      name: "Gynecology",
      icon: "👩‍⚕️",
      description: "Instruments designed for gynecological procedures",
    },
    {
      name: "Laparoscopic",
      icon: "🔬",
      description: "Advanced tools for minimally invasive surgeries",
    },
  ];

  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-3xl md:text-4xl font-bold text-teal-800 mb-4"
        >
          Our Product Range
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-teal-600 mb-12 max-w-2xl mx-auto"
        >
          We manufacture and supply a wide range of high-quality surgical
          instruments
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instrumentCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">
                {category.name}
              </h3>
              <p className="text-teal-600">{category.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="/products"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors font-medium"
          >
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyListingsSection;

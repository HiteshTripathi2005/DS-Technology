import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CompanyListingsSection = () => {
  const instrumentCategories = [
    {
      name: "General Surgery",

      description: "Precision instruments for general surgical procedures",
    },
    {
      name: "Orthopedic",
      description: "Specialized tools for bone and joint surgeries",
    },
    {
      name: "Dental & Oral",
      description: "Instruments for dental and oral surgical procedures",
    },
    {
      name: "ENT",
      description: "Specialized tools for ear, nose, and throat procedures",
    },
    {
      name: "Gynecology",
      description: "Instruments designed for gynecological procedures",
    },
    {
      name: "Laparoscopic",
      description: "Advanced tools for minimally invasive surgeries",
    },
  ];

  const marketplaces = [
    {
      name: "eBay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
      link: "https://www.ebay.com/usr/dharmrajsurgical",
      description: "Find our products on eBay Global",
    },
    {
      name: "IndiaMART",
      logo: "https://companieslogo.com/img/orig/INDIAMART.NS_BIG-467a563d.png?t=1720244492",
      link: "https://www.indiamart.com/dharmraj-surgical-technologies/sitenavigation.html?utm_campaign=imob_company_share&utm_medium=social&utm_source=social",
      description: "Explore our catalog on IndiaMART",
    },
  ];

  return (
    <>
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
            <Link
              to="/products"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors font-medium"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* E-commerce Platforms Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-3xl md:text-4xl font-bold text-teal-800 mb-4"
          >
            Find Us Online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-teal-600 mb-12 max-w-2xl mx-auto"
          >
            Shop our products on leading e-commerce platforms
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {marketplaces.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-2">
                  {platform.name}
                </h3>
                <p className="text-teal-600">{platform.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyListingsSection;

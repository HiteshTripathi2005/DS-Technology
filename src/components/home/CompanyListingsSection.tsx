import { motion } from "framer-motion";

const CompanyListingsSection = () => {
  const companies = [
    {
      name: "1mg",
      logo: "https://www.1mg.com/images/tata_1mg_logo.svg",
      link: "https://1mg.com",
    },
    {
      name: "PharmEasy",
      logo: "https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0",
      link: "https://pharmeasy.com",
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
          Our Market Presence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-teal-600 mb-12 max-w-2xl mx-auto"
        >
          Find our products on leading healthcare marketplaces
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <motion.a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-[200px] flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 md:h-10 object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyListingsSection;

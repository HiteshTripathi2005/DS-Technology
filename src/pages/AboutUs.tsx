import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // Add scroll to top behavior when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // List of surgical instrument categories
  const instrumentCategories = [
    "General Surgery Instruments",
    "Orthopedic Instruments",
    "Dental & Oral Surgery Instruments",
    "ENT (Ear, Nose & Throat) Instruments",
    "Gynecology & Urology Instruments",
    "Veterinary Surgical Instruments",
    "Micro & Neuro Surgery Instruments",
    "Laparoscopic & Endoscopic Instruments",
    "Cardiovascular & Thoracic Surgery Instruments",
  ];

  // List of company advantages
  const advantages = [
    {
      title: "High-Quality Manufacturing",
      description:
        "We use premium-grade stainless steel and cutting-edge technology to craft instruments that meet international standards.",
    },
    {
      title: "Advanced Repair Services",
      description:
        "Our skilled technicians offer precision repairs, ensuring instruments function like new.",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize client satisfaction by delivering exceptional products and after-sales support.",
    },
    {
      title: "Global Presence",
      description:
        "Our products and services are trusted by medical professionals across Europe, the USA, the Middle East, and Asia.",
    },
  ];

  const handleClick = () => {
    const phoneNumber = "+919359333692";
    const message =
      "Hello! I'm interested in your medical equipment for our hospital/medical facility. Would like to know more about your products and bulk pricing.";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-teal-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-200 mb-4">
              Welcome to Dharmraj Surgical Technologies
            </p>
            <p className="text-lg text-gray-300">
              Your trusted partner in precision-engineered surgical instruments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Dharmraj Surgical Technologies is a leading manufacturer,
              exporter, and service provider of high-quality surgical
              instruments. We specialize in designing, producing, and supplying
              precision-engineered medical tools for healthcare professionals
              worldwide. Additionally, we offer expert repair and maintenance
              services to ensure the longevity and efficiency of surgical
              instruments.
            </p>
            <p className="text-lg text-gray-700">
              We are a trusted name in the surgical industry, committed to
              providing superior-quality instruments that meet global medical
              standards. Our expertise lies in manufacturing durable, precise,
              and highly functional surgical tools that support medical
              professionals in delivering the best patient care.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&auto=format"
              alt="Surgical instruments manufacturing"
              className="rounded-lg shadow-xl w-full max-w-4xl h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12">
              At Dharmraj Surgical Technologies, we manufacture and supply a
              wide range of surgical instruments and medical tools, including:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {instrumentCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md flex items-center"
                >
                  <span className="text-teal-600 mr-3 text-xl">✔</span>
                  <p className="text-gray-800 font-medium">{category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Repair Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">
                Our Repair & Maintenance Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                In addition to manufacturing, we also provide professional
                repair and maintenance services for surgical instruments. Our
                expert technicians ensure that damaged or worn-out instruments
                are restored to their optimal working condition, extending their
                lifespan and maintaining surgical precision.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl mt-1">✔</span>
                  <p className="text-gray-700">
                    Precision repairs for all types of surgical instruments
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl mt-1">✔</span>
                  <p className="text-gray-700">
                    Restoration of instrument functionality and appearance
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl mt-1">✔</span>
                  <p className="text-gray-700">
                    Preventive maintenance to extend instrument lifespan
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl mt-1">✔</span>
                  <p className="text-gray-700">
                    Quality testing to ensure optimal performance
                  </p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&auto=format"
                alt="Surgical instrument repair"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We pride ourselves on delivering excellence in every aspect of our
              business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <span className="text-teal-600 mr-3 text-xl">✔</span>
                  <h3 className="text-xl font-bold text-teal-800">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-gray-700 pl-8">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-teal-800 text-white rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment
            </h2>
            <p className="text-xl mb-8">
              At Dharmraj Surgical Technologies, we are committed to excellence,
              precision, and reliability in surgical instrument manufacturing
              and servicing. Whether you need high-quality surgical tools or
              expert repair services, we are your trusted partner for medical
              innovation and efficiency.
            </p>
            <div className="mt-8 text-2xl font-semibold">
              Choose Dharmraj Surgical Technologies for unmatched precision and
              reliability in surgical solutions
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-teal-800 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold"
                onClick={handleClick}
              >
                Contact Us
              </motion.button>
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-teal-800 transition-colors text-lg font-semibold"
                >
                  View Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaAward, FaHandshake, FaHospital, FaUserMd } from "react-icons/fa";
import { MdHealthAndSafety, MdSupportAgent } from "react-icons/md";

const AboutUs = () => {
  const navigate = useNavigate();

  // Add scroll to top behavior when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gray-50">
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
            <p className="text-xl text-gray-200 mb-8">
              Your trusted partner in premium medical equipment and surgical
              instruments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
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
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 2023, we are a new and passionate team with a clear
                mission: to provide healthcare facilities across India with the
                highest quality medical equipment at competitive prices.
              </p>
              <p className="text-gray-700 mb-4">
                Though we've recently entered the market, our team brings
                together decades of combined experience in healthcare and
                medical equipment. We've established our company on the
                principles of quality, reliability, and exceptional customer
                service.
              </p>
              <p className="text-gray-700">
                As a young company, we're agile, innovative, and dedicated to
                building lasting relationships with hospitals, clinics, and
                healthcare professionals throughout India, providing them with
                the tools they need to deliver exceptional patient care.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format"
                alt="Medical professionals in a meeting"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
              Our Values
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our core values guide everything we do, from product selection to
              customer service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <MdHealthAndSafety className="text-5xl text-teal-600 mb-4" />
                ),
                title: "Quality Assurance",
                description:
                  "We source only the highest quality medical equipment that meets international standards and certifications.",
              },
              {
                icon: <FaHandshake className="text-5xl text-teal-600 mb-4" />,
                title: "Integrity",
                description:
                  "We conduct our business with honesty, transparency, and ethical practices in all our dealings.",
              },
              {
                icon: <FaAward className="text-5xl text-teal-600 mb-4" />,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from product selection to customer service.",
              },
              {
                icon: (
                  <MdSupportAgent className="text-5xl text-teal-600 mb-4" />
                ),
                title: "Customer Focus",
                description:
                  "We put our customers first, understanding their needs and providing personalized solutions.",
              },
              {
                icon: <FaUserMd className="text-5xl text-teal-600 mb-4" />,
                title: "Healthcare Impact",
                description:
                  "We're committed to improving healthcare outcomes through reliable medical equipment.",
              },
              {
                icon: <FaHospital className="text-5xl text-teal-600 mb-4" />,
                title: "Nationwide Service",
                description:
                  "We're proud to serve healthcare facilities across all of India with prompt delivery and support.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-teal-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}

      {/* Contact CTA Section */}
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
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8">
              Contact our team today to discuss how we can meet your medical
              equipment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-teal-800 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold"
                onClick={() => {
                  window.open(
                    "https://wa.me/919359333692?text=Hello, I'm interested in your medical equipment. Can you provide more information about your products and bulk pricing?",
                    "_blank"
                  );
                }}
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-teal-800 transition-colors text-lg font-semibold"
                onClick={() => {
                  navigate("/products");
                }}
              >
                View Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

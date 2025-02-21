import { motion } from "framer-motion";

const features = [
  {
    title: "Bulk Supply Expertise",
    description:
      "Specialized in large-scale medical equipment supply with competitive wholesale pricing for healthcare facilities.",
    icon: "🏥",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=500&auto=format",
  },
  {
    title: "Quality Assurance",
    description:
      "All equipment meets international medical standards with proper certification and quality guarantees.",
    icon: "✓",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&auto=format",
  },
  {
    title: "Technical Support",
    description:
      "Dedicated technical team for installation, training, and after-sales support for all equipment.",
    icon: "🔧",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&auto=format",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-teal-800"
        >
          Why Partner With Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-teal-50 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-teal-900">
                  {feature.title}
                </h3>
                <p className="text-teal-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

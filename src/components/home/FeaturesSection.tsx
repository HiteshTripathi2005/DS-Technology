import { motion } from "framer-motion";

const features = [
  {
    title: "Premium Surgical Instruments",
    description:
      "We manufacture and supply high-quality surgical instruments crafted from premium-grade stainless steel using cutting-edge technology.",
    icon: "🔧",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=500&auto=format",
  },
  {
    title: "Expert Repair Services",
    description:
      "Our skilled technicians provide precision repairs and maintenance for all types of surgical instruments, extending their lifespan and ensuring optimal performance.",
    icon: "⚙️",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=500&auto=format",
  },
  {
    title: "Global Presence",
    description:
      "Our products and services are trusted by medical professionals across Europe, the USA, the Middle East, and Asia.",
    icon: "🌎",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&auto=format",
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
          Our Specialties
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

import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products"; // Updated import
import ImageSlider from "../components/ImageSlider";
import { useEffect } from "react";
import SEO from "../components/SEO";
import ProductJsonLd from "../components/ProductJsonLd";

const ProductInfo = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <SEO
          title="Product Not Found"
          description="The requested product could not be found. Browse our complete catalog of surgical instruments and medical equipment."
          canonicalUrl="https://dharmrajsurgicaltechnologies.com//products"
        />
        <h2 className="text-2xl font-bold mb-4 text-teal-900">
          Product not found
        </h2>
        <Link
          to="/products"
          className="text-teal-600 hover:text-teal-800 underline"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={product.name}
        description={`${product.description} - High-quality ${product.category} from Dharmraj Surgical Technologies. Features include ${product.features[0]}.`}
        canonicalUrl={`https://dharmrajsurgicaltechnologies.com//product/${product.id}`}
        keywords={`${product.name}, ${product.category}, surgical instruments, medical equipment, hospital supplies`}
        ogImage={product.images[0]}
      />

      {/* Add JSON-LD structured data */}
      <ProductJsonLd
        name={product.name}
        description={product.description}
        image={product.images[0]}
        price={product.price}
        inStock={product.stock > 0}
        category={product.category}
        url={`https://dharmrajsurgicaltechnologies.com//product/${product.id}`}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to="/products"
            className="inline-flex items-center text-teal-600 hover:text-teal-800 group"
          >
            <svg
              className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm md:text-base font-medium">
              Back to Products
            </span>
          </Link>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <motion.div
              key={`image-${id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 md:p-8 bg-gray-50"
            >
              <ImageSlider images={product.images} productName={product.name} />
            </motion.div>

            {/* Product Details Section */}
            <motion.div
              key={`details-${id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 md:p-8 lg:border-l"
            >
              {/* Category Badge */}
              <div className="inline-block bg-teal-50 text-teal-700 text-sm px-3 py-1 rounded-full mb-4">
                {product.category}
              </div>

              {/* Product Title & Price */}
              <div className="space-y-4 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-teal-900">
                  {product.name}
                </h1>
                <p className="text-teal-600 text-lg">{product.description}</p>
                <p className="text-3xl font-bold text-teal-800">
                  {product.price}
                </p>
              </div>

              {/* Stock Status */}
              <div className="flex items-center mb-8">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    product.stock > 0 ? "bg-teal-500" : "bg-red-500"
                  }`}
                />
                <span
                  className={`font-medium ${
                    product.stock > 0 ? "text-teal-700" : "text-red-700"
                  }`}
                >
                  {product.stock > 0
                    ? `In Stock (${product.stock} available)`
                    : "Out of Stock"}
                </span>
              </div>

              {/* Features Section */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 text-teal-900">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <svg
                        className="w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Additional Information */}
              <div className=" pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Product ID</p>
                    <p className="font-medium text-gray-900">#{product.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Category</p>
                    <p className="font-medium text-gray-900">
                      {product.category}
                    </p>
                  </div>
                </div>
              </div>
              {/* WhatsApp Button for Inquiry */}
              <a
                href={`https://wa.me/+919359333692?text=${encodeURIComponent(
                  "I have a question about " + product.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp Inquiry
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

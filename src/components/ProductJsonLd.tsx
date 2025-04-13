import { Helmet } from "react-helmet-async";

interface ProductJsonLdProps {
  name: string;
  description: string;
  image: string;
  price: string;
  inStock: boolean;
  category: string;
  url: string;
  brand?: string;
}

const ProductJsonLd = ({
  name,
  description,
  image,
  price,
  inStock,
  category,
  url,
  brand = "Dharmraj Surgical Technologies",
}: ProductJsonLdProps) => {
  // Format the price to remove currency symbol and text
  const priceValue = price.replace(/[^0-9.]/g, "");

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name,
    description,
    image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: priceValue || "0",
      availability: inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
    category,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default ProductJsonLd;

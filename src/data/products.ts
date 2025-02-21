export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  images: string[];
  features: string[];
  category: string;
  stock: number;
  specifications: {
    material: string;
    size: string;
    sterilization: string;
    certification: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Veress Needle",
    price: "Contact for Bulk Pricing",
    description:
      "High-quality Veress needle for safe and reliable pneumoperitoneum creation in laparoscopic procedures.",
    images: [
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1587745416684-47953f16f02f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
    ],
    features: [
      "Spring-loaded safety mechanism",
      "Smooth transition between inner stylet and outer cannula",
      "Clear flow indication",
      "Ergonomic design",
      "Available in multiple sizes",
    ],
    category: "Laparoscopic Instruments",
    stock: 500,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "120mm, 150mm lengths available",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 2,
    name: "Trocar Cannula",
    price: "Contact for Bulk Pricing",
    description:
      "Premium quality trocar cannula set for minimally invasive surgical procedures, featuring smooth insertion and reliable performance.",
    images: [
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
    ],
    features: [
      "Transparent cannula for clear visibility",
      "Automatic valve system",
      "Adjustable sleeve",
      "Universal compatibility",
      "Reusable design",
    ],
    category: "Laparoscopic Instruments",
    stock: 300,
    specifications: {
      material: "Medical Grade Stainless Steel & Plastic",
      size: "5mm, 10mm, 12mm available",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 3,
    name: "Trocar Pin (TOCHA)",
    price: "Contact for Bulk Pricing",
    description:
      "Precision-engineered trocar pin with sharp tip for efficient and controlled entry during laparoscopic procedures.",
    images: [
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
    ],
    features: [
      "Triangular ground tip",
      "Ergonomic handle design",
      "Compatible with standard cannulas",
      "Precise control during insertion",
      "Durable construction",
    ],
    category: "Laparoscopic Instruments",
    stock: 400,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "Standard sizes available",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 4,
    name: "Dissecting/Grasping Forceps",
    price: "Contact for Bulk Pricing",
    description:
      "Professional-grade dissecting and grasping forceps for precise tissue manipulation during surgical procedures.",
    images: [
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1587745416684-47953f16f02f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
    ],
    features: [
      "Atraumatic jaw design",
      "Ratchet mechanism",
      "Insulated handles",
      "Various jaw patterns available",
      "Ergonomic grip",
    ],
    category: "Surgical Instruments",
    stock: 600,
    specifications: {
      material: "Premium Surgical Steel",
      size: "Multiple lengths available",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 5,
    name: "Atraumatic Graspers",
    price: "Contact for Bulk Pricing",
    description:
      "Specialized atraumatic graspers designed for gentle tissue handling and minimal trauma during surgical procedures.",
    images: [
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
    ],
    features: [
      "Fenestrated jaw design",
      "Smooth action mechanism",
      "Textured handle for grip",
      "Multiple jaw patterns",
      "Precision-engineered joints",
    ],
    category: "Surgical Instruments",
    stock: 450,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "Various sizes available",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
];

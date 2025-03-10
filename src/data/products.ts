import {
  bipolarDouble,
  flexibleAlligator1,
  flexibleAlligator2,
  stonePunch,
  stonePunch2,
  stonePunch3,
  storz1,
  storz2,
  storz3,
  StorzSingle1,
  StorzSingle2,
  StorzSingle3,
} from "../assets/image";

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
    name: "Storz Single Stem Cutting Loop",
    price: "Contact for Bulk Pricing",
    description:
      "Precision electrode loop for transurethral resection procedures with clean cutting capability.",
    images: [storz1, storz2, storz3],
    features: [
      "Single stem design for enhanced stability",
      "Precision tissue removal",
      "Compatible with Storz resectoscope systems",
    ],
    category: "Urology Instruments",
    stock: 120,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "22 Fr - 2.9mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 2,
    name: "Bipolar Cutting Loop (Storz Single)",
    price: "Contact for Bulk Pricing",
    description:
      "Advanced bipolar electrode for urological resections with reduced risk of TUR syndrome.",
    images: [StorzSingle1, StorzSingle2, StorzSingle3],
    features: [
      "Bipolar energy technology",
      "Reduced electrical current dispersion",
      "Enhanced safety profile",
    ],
    category: "Urology Instruments",
    stock: 95,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 3,
    name: "Bipolar Double Stem Loop",
    price: "Contact for Bulk Pricing",
    description:
      "High-stability resection loop featuring dual support stems for enhanced control and reduced wire deflection.",
    images: [bipolarDouble],
    features: [
      "Enhanced dual-stem design",
      "Minimizes bleeding",
      "High-quality construction",
    ],
    category: "Urology Instruments",
    stock: 80,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "24 Fr",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 4,
    name: "Flexible Alligator",
    price: "Contact for Bulk Pricing",
    description:
      "Precision grasping forceps with alligator-jaw design for endoscopic retrieval of stones or tissue samples.",
    images: [flexibleAlligator1, flexibleAlligator2],
    features: [
      "Flexible shaft for navigation",
      "Atraumatic grasping capability",
      "Excellent tactile feedback",
    ],
    category: "Urology Instruments",
    stock: 110,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "5 Fr",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 6,
    name: "Stone Punch",
    price: "Contact for Bulk Pricing",
    description:
      "Specialized mechanical instrument for fragmenting and retrieving urinary calculi without energy sources.",
    images: [stonePunch, stonePunch2, stonePunch3],
    features: [
      "Mechanical fragmentation",
      "Immediate fragment retrieval",
      "No energy source required",
    ],
    category: "Urology Instruments",
    stock: 75,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 7,
    name: "Thumb Suction",
    price: "Contact for Bulk Pricing",
    description:
      "Ergonomic suction device with thumb-activated control for precise fluid management during endoscopic procedures.",
    images: [
      "https://tentabs.in/cdn/shop/products/suction-500x500_1024x1024@2x.jpg?v=1582175929",
    ],
    features: [
      "Thumb-activated control",
      "Anti-clog design",
      "Single-handed operation",
    ],
    category: "Urology Instruments",
    stock: 100,
    specifications: {
      material: "Medical Grade Materials",
      size: "10/05",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 8,
    name: "Otis",
    price: "Contact for Bulk Pricing",
    description:
      "Classic urethral dilator system for accurate calibration and progressive dilation of urethral strictures.",
    images: [
      "https://5.imimg.com/data5/SM/EY/MY-185181/otis-urethrotome-urology-accessories-for-cystoscope-500x500.jpg",
    ],
    features: [
      "Controlled, measurable dilation",
      "Minimal trauma design",
      "Progressive sizing options",
    ],
    category: "Urology Instruments",
    stock: 85,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 9,
    name: "Working Element Bipolar",
    price: "Contact for Bulk Pricing",
    description:
      "Active working element for resectoscopes using bipolar energy with precision spring mechanism.",
    images: [
      "https://www.karlstorz.com/catalog-api/mediafiles/stream/in_en/186326",
    ],
    features: [
      "Precision spring mechanism",
      "Accurate cutting depth control",
      "Reliable bipolar current delivery",
    ],
    category: "Urology Instruments",
    stock: 90,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "4mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 10,
    name: "Working Element Monopolar",
    price: "Contact for Bulk Pricing",
    description:
      "Standard working element for monopolar resection procedures with consistent energy delivery.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/5/WP/XC/YC/152415936/whatsapp-image-2022-05-05-at-5-17-32-pm-500x500.jpeg",
    ],
    features: [
      "Consistent monopolar energy",
      "Efficient tissue resection",
      "Standard compatibility",
    ],
    category: "Urology Instruments",
    stock: 105,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "4mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 11,
    name: "Resectoscopy Sheath (Inner & Outer)",
    price: "Contact for Bulk Pricing",
    description:
      "Continuous-flow sheath system ideal for standard male urological procedures.",
    images: [
      "https://www.karlstorz.com/catalog-api/mediafiles/stream/in_en/149362",
      "https://5.imimg.com/data5/EI/LR/LO/SELLER-2799004/resectoscope-t-u-r-p-sheath.jpg",
    ],
    features: [
      "Dual-sheath design",
      "Simultaneous irrigation and drainage",
      "Rotating mechanism with quick-lock",
    ],
    category: "Urology Instruments",
    stock: 70,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "26 Fr",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 12,
    name: "Resectoscopy Sheath (Inner & Outer)",
    price: "Contact for Bulk Pricing",
    description:
      "Smaller profile resectoscope sheath system for female urology or narrower urethral anatomy.",
    images: [
      "https://www.karlstorz.com/catalog-api/mediafiles/stream/in_en/149362",
      "https://5.imimg.com/data5/SELLER/Default/2024/11/463339965/WU/OO/PR/651369/rotatable-outer-sheath-resectoscope-turp-set-500x500.jpeg",
    ],
    features: [
      "Reduced diameter profile",
      "Maintains continuous-flow",
      "Smooth instrument exchange",
    ],
    category: "Urology Instruments",
    stock: 65,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "22 Fr",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 13,
    name: "Batuchi Sheath",
    price: "Contact for Bulk Pricing",
    description:
      "Ultra-slim diagnostic hysteroscopy sheath for minimally invasive uterine evaluation.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2023/1/RW/KJ/TC/43379003/4mm-batuchi-hysteroscope-sheath.jpeg",
      "https://5.imimg.com/data5/ANDROID/Default/2021/9/FC/DT/EJ/70074253/product-jpeg-500x500.jpg",
    ],
    features: [
      "Office-based procedures",
      "Minimal patient discomfort",
      "Excellent visualization",
    ],
    category: "Hysteroscopy Instruments",
    stock: 85,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "2.9 mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 14,
    name: "Working Element Passive",
    price: "Contact for Bulk Pricing",
    description:
      "Non-electrical working element for mechanical manipulation during endoscopic procedures.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/12/TG/YI/AI/2394403/working-element-passive-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2020/11/BS/NV/BW/4009131/working-element-500x500.jpg",
    ],
    features: [
      "Broad compatibility",
      "Ideal for non-electrical procedures",
      "Precision mechanical control",
    ],
    category: "Hysteroscopy Instruments",
    stock: 95,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "4mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 15,
    name: "Hysteroscopy Eligator",
    price: "Contact for Bulk Pricing",
    description:
      "Specialized endometrial tissue grasper for hysteroscopic procedures targeting polyps and fibroids.",
    images: [
      "https://5.imimg.com/data5/ANDROID/Default/2020/10/ZY/LV/QK/54757509/prod-20201008-183531572900337326482197-jpg-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2022/7/WS/ZU/JP/155611110/whatsapp-image-2022-07-22-at-3-22-57-pm-250x250.jpeg",
    ],
    features: [
      "Precise tissue targeting",
      "Secure grip mechanism",
      "Atraumatic tip design",
    ],
    category: "Hysteroscopy Instruments",
    stock: 75,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },

  {
    id: 17,
    name: "Hysteroscopy Scissor",
    price: "Contact for Bulk Pricing",
    description:
      "Precision cutting instrument for hysteroscopic adhesiolysis, septum division, and polyp removal.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2024/1/375572975/WN/WP/XQ/14173924/hysteroscopey-scissor.jpeg",
      "https://m.media-amazon.com/images/I/61WbqMfc-YL.jpg",
    ],
    features: [
      "Sharp blade design",
      "Clean tissue division",
      "Available in straight and angled configurations",
    ],
    category: "Hysteroscopy Instruments",
    stock: 70,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 18,
    name: "Endoclinch Grasper",
    price: "Contact for Bulk Pricing",
    description:
      "Versatile laparoscopic grasper with specialized jaws for secure tissue manipulation.",
    images: [
      "https://5.imimg.com/data5/TK/TL/RJ/SELLER-12213582/endo-clinch-grasper.jpg",
      "https://m.media-amazon.com/images/I/41ilsogJg1L._AC_UF1000,1000_QL80_.jpg",
    ],
    features: [
      "Ratchet locking mechanism",
      "Ergonomic handle design",
      "Secure tissue grip",
    ],
    category: "Laparoscopic Instruments",
    stock: 90,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "5mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 19,
    name: "Bipolar Turp Cable Single Stem",
    price: "Contact for Bulk Pricing",
    description:
      "High-quality connection cable for single stem bipolar resectoscopes with reinforced insulation.",
    images: [
      "https://cdn.dotpe.in/longtail/store-items/8015005/45VvFCfI.webp",
      "https://m.media-amazon.com/images/I/61qYE6QJl6L._AC_UF350,350_QL80_.jpg",
    ],
    features: [
      "Reinforced insulation",
      "Compatible with major electrosurgical generators",
      "Durable through sterilization cycles",
    ],
    category: "Cables and Accessories",
    stock: 110,
    specifications: {
      material: "Medical Grade Materials",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 20,
    name: "Bipolar Turp Cable Double Stem",
    price: "Contact for Bulk Pricing",
    description:
      "Specialized cable for double stem bipolar resection instruments with consistent electrical contact.",
    images: [
      "https://m.media-amazon.com/images/I/61qYE6QJl6L.jpg",
      "https://rukminim2.flixcart.com/image/750/900/xif0q/forceps-jar/a/5/y/4-laparoscopic-turp-bipolar-high-frequency-cable-double-stem-for-original-imagzn96gepdbzwz.jpeg?q=20&crop=false",
    ],
    features: [
      "Color-coded connectors",
      "Flexible, durable construction",
      "Reliable performance",
    ],
    category: "Cables and Accessories",
    stock: 95,
    specifications: {
      material: "Medical Grade Materials",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 21,
    name: "Clip Applicator",
    price: "Contact for Bulk Pricing",
    description:
      "Precision instrument for deploying surgical clips during laparoscopic procedures with adjustable closing force.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/TD/SC/JN/155611110/laparoscopic-clip-applicator-10mmx330mm-small-jaw-3-in-1-high-quality-surgical-instruments.jpeg",
    ],
    features: [
      "Adjustable closing force",
      "Secure clip retention",
      "Standard trocar compatibility",
    ],
    category: "Laparoscopic Instruments",
    stock: 75,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "5mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 22,
    name: "Bolong Scope",
    price: "Contact for Bulk Pricing",
    description:
      "Ultra-slim endoscope for minimally invasive visualization with high-resolution fiber optic system.",
    images: [
      "https://5.imimg.com/data5/ANDROID/Default/2021/4/JW/XS/PQ/10138709/product-jpeg-500x500.jpg",
      "https://5.imimg.com/data5/ANDROID/Default/2024/3/395562567/EU/IN/AU/61522062/product-jpeg.jpg",
    ],
    features: [
      "High-resolution fiber optics",
      "Excellent illumination",
      "Compatible with standard light sources",
    ],
    category: "Specialized Equipment",
    stock: 60,
    specifications: {
      material: "Medical Grade Materials",
      size: "2.9mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 23,
    name: "Turp Monopolar Cable",
    price: "Contact for Bulk Pricing",
    description:
      "Standard connection cable for monopolar resectoscope systems with reliable energy transfer.",
    images: [
      "https://m.media-amazon.com/images/I/51XcGuY90fL._AC_UF1000,1000_QL80_.jpg",
    ],
    features: [
      "Reinforced insulation",
      "Hospital-grade connectors",
      "Wide compatibility",
    ],
    category: "Cables and Accessories",
    stock: 120,
    specifications: {
      material: "Medical Grade Materials",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 24,
    name: "Silicon Patient Plate",
    price: "Contact for Bulk Pricing",
    description:
      "Premium silicone-based return electrode for monopolar electrosurgery with large surface area.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2023/8/337811316/MZ/EP/MH/5538683/reusable-patient-plate-with-cable-valleylab-imported-silicon-500x500.png",
      "https://5.imimg.com/data5/SELLER/Default/2022/2/YE/XH/SF/2035363/conductive-silicon-rubber-patient-plate-500x500.JPG",
    ],
    features: [
      "Large surface area design",
      "Reduced risk of thermal injury",
      "Hypoallergenic adhesive",
    ],
    category: "Cables and Accessories",
    stock: 150,
    specifications: {
      material: "Medical Grade Silicone",
      size: "Standard",
      sterilization: "Single Use",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 25,
    name: "Patient Plate Cable",
    price: "Contact for Bulk Pricing",
    description:
      "Connection cable between electrosurgical unit and patient return electrode with quick-connect design.",
    images: [
      "https://m.media-amazon.com/images/I/41DmlWkzViL._AC_UF1000,1000_QL80_.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2022/3/EN/YM/KS/2035363/surgical-cautery-patient-plate-cable-cord-500x500.jpeg",
    ],
    features: [
      "Quick-connect with safety lock",
      "High-flexibility construction",
      "Reliable electrical continuity",
    ],
    category: "Cables and Accessories",
    stock: 100,
    specifications: {
      material: "Medical Grade Materials",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 26,
    name: "Batuchi Sheath",
    price: "Contact for Bulk Pricing",
    description:
      "Standard diagnostic sheath for hysteroscopic and cystoscopic applications with irrigation capability.",
    images: [
      "https://5.imimg.com/data5/ANDROID/Default/2021/9/FC/DT/EJ/70074253/product-jpeg-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/1/378096128/IE/CG/UZ/2447628/hysteroscopy-operative-batuchi-sheath.jpeg",
    ],
    features: [
      "Stable instrument platform",
      "Continuous irrigation capability",
      "Standard optical compatibility",
    ],
    category: "Hysteroscopy Instruments",
    stock: 85,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "4 mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 28,
    name: "Alise Grasper",
    price: "Contact for Bulk Pricing",
    description:
      "Specialized laparoscopic grasping instrument with atraumatic jaw design for delicate tissue manipulation.",
    images: [
      "https://5.imimg.com/data5/QB/RJ/TA/SELLER-9323446/allis-laproscopy-grasper.jpg",
      "https://www.indosurgicals.com/images/products/93465-allis-grasper-single-action.jpg",
    ],
    features: [
      "Atraumatic jaw design",
      "Serrated grip pattern",
      "Standard trocar compatibility",
    ],
    category: "Laparoscopic Instruments",
    stock: 80,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "5mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 29,
    name: "Marva Uterine Monopolar",
    price: "Contact for Bulk Pricing",
    description:
      "Specialized monopolar electrode for gynecological procedures with insulated shaft and precise active tip.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/JN/FT/LF/155611110/laparoscopic-gynecology-marva-type-uterine-manipulator-reusable-surgical-instruments.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2022/8/FJ/XJ/WK/155611110/laparoscopic-gynecology-s-type-marva-type-uterine-manipulator-reusable-surgical-instruments-500x500.jpeg",
    ],
    features: [
      "Insulated shaft design",
      "Precisely exposed active tip",
      "Minimal thermal spread",
    ],
    category: "Specialized Equipment",
    stock: 70,
    specifications: {
      material: "Surgical Grade Materials",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 30,
    name: "Triprong Grasper",
    price: "Contact for Bulk Pricing",
    description:
      "Miniature three-pronged grasping forceps for endoscopic procedures with unique three-point contact.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2023/3/295652827/RF/ZW/AM/3588898/tri-prong-grasper-500x500.jpeg",
    ],
    features: [
      "Three-point contact design",
      "Stable small object capture",
      "Narrow working channel compatibility",
    ],
    category: "Laparoscopic Instruments",
    stock: 75,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "5 Fr",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 31,
    name: "Olympus Cutting Loop",
    price: "Contact for Bulk Pricing",
    description:
      "Premium resection loop compatible with Olympus resectoscope systems featuring precision-engineered wire.",
    images: [
      "https://image.made-in-china.com/202f0j00RCYhUpkcJozj/Olympus-Compatible-Monopolar-Cutting-Loops.webp",
    ],
    features: [
      "30-degree angled design",
      "Optimal visualization during cutting",
      "Minimal tissue drag",
    ],
    category: "Urology Instruments",
    stock: 90,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "24 Fr, 30 deg",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 32,
    name: "Vaginal Tube",
    price: "Contact for Bulk Pricing",
    description:
      "Specialized access device for transvaginal procedures with atraumatic edges and optimal length.",
    images: [
      "https://m.media-amazon.com/images/I/410a4EhtoFL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/51zDyIMvUxL._AC_UF1000,1000_QL80_.jpg",
    ],
    features: [
      "Stable working channel",
      "Protective tissue design",
      "Comfortable positioning",
    ],
    category: "Specialized Equipment",
    stock: 60,
    specifications: {
      material: "Medical Grade Materials",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 33,
    name: "Hysteroscopy Grasper Insert",
    price: "Contact for Bulk Pricing",
    description:
      "Insertable grasping tool designed for foreign body or tissue retrieval during hysteroscopic procedures.",
    images: [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/16110001/4133592768.jpg",
      "https://ars.els-cdn.com/content/image/1-s2.0-S1028455918300755-gr2.jpg",
    ],
    features: [
      "Secure grip mechanism",
      "Low profile design",
      "Standard hysteroscope compatibility",
    ],
    category: "Hysteroscopy Instruments",
    stock: 85,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 34,
    name: "Working Element Passive Extra Fitting",
    price: "Contact for Bulk Pricing",
    description:
      "Specialized passive working element for compatibility with slim-profile endoscopic systems.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2023/11/363675027/GL/AQ/XG/188702111/working-element-passive-type.jpg",
    ],
    features: [
      "Reduced profile fitting",
      "Non-electrical design",
      "Ideal for diagnostic procedures",
    ],
    category: "Specialized Equipment",
    stock: 70,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "2.9 mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 35,
    name: "Visual Obturator",
    price: "Contact for Bulk Pricing",
    description:
      "Transparent tip device for safer insertion of endoscopic instruments with direct tissue layer visualization.",
    images: [
      "https://www.karlstorz.com/catalog-api/mediafiles/stream/in_en/181232",
      "https://5.imimg.com/data5/SELLER/Default/2024/2/394675012/MZ/EZ/ZC/185181/urology-visual-obturator.jpg",
    ],
    features: [
      "Transparent visualization tip",
      "Reduced risk of injury",
      "Standard system compatibility",
    ],
    category: "Specialized Equipment",
    stock: 85,
    specifications: {
      material: "Medical Grade Materials",
      size: "Standard",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
  {
    id: 36,
    name: "Hemo-Lock",
    price: "Contact for Bulk Pricing",
    description:
      "Advanced laparoscopic clip applicator for secure closure of larger vascular structures.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/2/GC/NH/KD/8933272/hemo-lock-applicator-500x500.jpg",
      "https://tentabs.in/cdn/shop/products/SR_544995L_580x.jpg?v=1582180511",
    ],
    features: [
      "Polymer locking clip delivery",
      "Superior vascular security",
      "Essential for complex procedures",
    ],
    category: "Laparoscopic Instruments",
    stock: 70,
    specifications: {
      material: "Surgical Grade Stainless Steel",
      size: "10 mm",
      sterilization: "Autoclavable",
      certification: "CE, ISO 13485",
    },
  },
];

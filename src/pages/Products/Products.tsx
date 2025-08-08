// // Products.js
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "./Products.css"; // Create this CSS file

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate API fetch with sample data
//   useEffect(() => {
//     const fetchProducts = async () => {
//       // In a real app, this would be an API call
//       const sampleProducts = [
//         {
//           id: "PRD-001",
//           code: "ML-1000",
//           name: "MaxiLube Industrial",
//           category: "industrial",
//           description:
//             "High-performance industrial lubricant for heavy machinery",
//           features: [
//             "Extreme pressure resistance",
//             "Long-lasting protection",
//             "Corrosion inhibition",
//           ],
//           specifications: {
//             viscosity: "ISO VG 220",
//             tempRange: "-20°C to 150°C",
//             baseOil: "Synthetic",
//           },
//           image: "https://example.com/products/industrial.jpg", // Replace with your image
//         },
//         {
//           id: "PRD-002",
//           code: "ML-2000",
//           name: "EcoLube Green",
//           category: "eco",
//           description: "Environmentally friendly biodegradable lubricant",
//           features: [
//             "100% biodegradable",
//             "Non-toxic formulation",
//             "Vegetable oil base",
//           ],
//           specifications: {
//             viscosity: "ISO VG 68",
//             tempRange: "-10°C to 100°C",
//             baseOil: "Vegetable",
//           },
//           image: "https://example.com/products/eco.jpg", // Replace with your image
//         },
//         {
//           id: "PRD-003",
//           code: "ML-3000",
//           name: "TurboLube Racing",
//           category: "automotive",
//           description:
//             "Premium synthetic lubricant for high-performance engines",
//           features: [
//             "Enhanced engine protection",
//             "Reduced friction",
//             "Improved fuel efficiency",
//           ],
//           specifications: {
//             viscosity: "SAE 5W-30",
//             tempRange: "-30°C to 200°C",
//             baseOil: "Full Synthetic",
//           },
//           image: "https://example.com/products/automotive.jpg", // Replace with your image
//         },
//         {
//           id: "PRD-004",
//           code: "ML-4000",
//           name: "FoodGrade Lube",
//           category: "food",
//           description:
//             "NSF H1 registered lubricant for food processing equipment",
//           features: [
//             "FDA compliant",
//             "Odorless and tasteless",
//             "High oxidation stability",
//           ],
//           specifications: {
//             viscosity: "ISO VG 100",
//             tempRange: "-10°C to 120°C",
//             baseOil: "White Mineral",
//           },
//           image: "https://example.com/products/food.jpg", // Replace with your image
//         },
//       ];

//       setProducts(sampleProducts);
//       setFilteredProducts(sampleProducts);

//       // Extract unique categories
//       const uniqueCategories = [
//         "all",
//         ...new Set(sampleProducts.map((p) => p.category)),
//       ];
//       setCategories(uniqueCategories);

//       setIsLoading(false);
//     };

//     fetchProducts();
//   }, []);

//   const filterProducts = (category: React.SetStateAction<string>) => {
//     setActiveCategory(category);
//     if (category === "all") {
//       setFilteredProducts(products);
//     } else {
//       setFilteredProducts(
//         products.filter((product) => product.category === category)
//       );
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="loading-container">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           className="loading-spinner"
//         >
//           ⚙️
//         </motion.div>
//         <p>Loading products...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="products-container">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="products-header"
//       >
//         <h1>OUR PRODUCTS</h1>
//         <p>Innovative lubrication solutions for every industry need</p>
//       </motion.div>

//       <div className="category-filter">
//         {categories.map((category) => (
//           <motion.button
//             key={category}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`filter-btn ${
//               activeCategory === category ? "active" : ""
//             }`}
//             onClick={() => filterProducts(category)}
//           >
//             {category === "all" ? "All Products" : category}
//           </motion.button>
//         ))}
//       </div>

//       <div className="products-grid">
//         {filteredProducts.map((product, index) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ y: -5 }}
//             className="product-card"
//           >
//             <div className="product-badge">
//               <span className="product-id">{product.id}</span>
//               <span className="product-code">{product.code}</span>
//             </div>

//             <div className="product-image">
//               <img src={product.image} alt={product.name} />
//             </div>

//             <div className="product-info">
//               <h3>{product.name}</h3>
//               <p className="product-description">{product.description}</p>

//               <div className="product-features">
//                 <h4>Key Features:</h4>
//                 <ul>
//                   {product.features.map((feature, i) => (
//                     <li key={i}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="product-specs">
//                 <h4>Specifications:</h4>
//                 <div className="spec-grid">
//                   <div>
//                     <span>Viscosity:</span>
//                     <strong>{product.specifications.viscosity}</strong>
//                   </div>
//                   <div>
//                     <span>Temp Range:</span>
//                     <strong>{product.specifications.tempRange}</strong>
//                   </div>
//                   <div>
//                     <span>Base Oil:</span>
//                     <strong>{product.specifications.baseOil}</strong>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="product-actions">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="inquiry-btn"
//               >
//                 Request Info
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="brochure-btn"
//               >
//                 Download Brochure
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

// Products.js
// import { useState, useEffect, SetStateAction } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import "./Products.css";

// const productCategories = [
//   { id: "all", label: "All Products" },
//   { id: "grease", label: "Grease" },
//   { id: "oil", label: "Oil" },
//   { id: "engine", label: "Engine" },
//   { id: "industrial", label: "Industrial" },
//   { id: "food", label: "Food Grade" },
// ];

// const Products = () => {
//   const { category } = useParams();
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(category || "all");
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   //   const navigate = useNavigate();

//   // Simulate API fetch with more comprehensive sample data
//   useEffect(() => {
//     const fetchProducts = async () => {
//       // Extended sample data with more products and details
//       const sampleProducts = [
//         {
//           id: "PRD-001",
//           code: "ML-1000",
//           name: "MaxiLube Industrial Grease",
//           category: "grease",
//           subCategory: "industrial",
//           description: "Heavy-duty grease for extreme industrial conditions",
//           features: [
//             "EP (Extreme Pressure) additives",
//             "Water resistance",
//             "Long service intervals",
//             "Oxidation stability",
//           ],
//           specifications: {
//             viscosity: "NLGI Grade 2",
//             tempRange: "-30°C to 180°C",
//             baseOil: "Lithium Complex",
//             color: "Dark Brown",
//           },
//           applications: ["Mining equipment", "Steel mills", "Paper machinery"],
//           image: "/images/products/grease-industrial.jpg",
//           brochure: "/brochures/maxilube-industrial.pdf",
//           safetyData: "/sds/maxilube-industrial-sds.pdf",
//         },
//         {
//           id: "PRD-002",
//           code: "ML-2000",
//           name: "EcoLube Bio Grease",
//           category: "grease",
//           subCategory: "eco",
//           description: "Environmentally friendly biodegradable grease",
//           features: [
//             "100% biodegradable",
//             "Non-toxic formulation",
//             "Vegetable oil base",
//             "Excellent lubricity",
//           ],
//           specifications: {
//             viscosity: "NLGI Grade 1-2",
//             tempRange: "-20°C to 120°C",
//             baseOil: "Vegetable",
//             color: "Light Green",
//           },
//           applications: [
//             "Agricultural equipment",
//             "Marine applications",
//             "Forestry machinery",
//           ],
//           image: "/images/products/grease-eco.jpg",
//           brochure: "/brochures/ecolube-bio.pdf",
//           safetyData: "/sds/ecolube-bio-sds.pdf",
//         },
//         {
//           id: "PRD-003",
//           code: "ML-3000",
//           name: "TurboLube Engine Oil",
//           category: "oil",
//           subCategory: "engine",
//           description:
//             "Full synthetic engine oil for high-performance vehicles",
//           features: [
//             "Enhanced engine protection",
//             "Reduced friction",
//             "Improved fuel efficiency",
//             "Thermal stability",
//           ],
//           specifications: {
//             viscosity: "SAE 5W-40",
//             tempRange: "-40°C to 210°C",
//             baseOil: "PAO Synthetic",
//             certifications: "API SN, ACEA A3/B4",
//           },
//           applications: [
//             "Performance cars",
//             "Turbocharged engines",
//             "Racing applications",
//           ],
//           image: "/images/products/oil-engine.jpg",
//           brochure: "/brochures/turbolube-engine.pdf",
//           safetyData: "/sds/turbolube-engine-sds.pdf",
//         },
//         {
//           id: "PRD-004",
//           code: "ML-4000",
//           name: "FoodSafe Lubricant",
//           category: "oil",
//           subCategory: "food",
//           description: "NSF H1 registered lubricant for food processing",
//           features: [
//             "FDA compliant",
//             "Odorless and tasteless",
//             "High oxidation stability",
//             "Non-staining",
//           ],
//           specifications: {
//             viscosity: "ISO VG 100",
//             tempRange: "-10°C to 120°C",
//             baseOil: "White Mineral",
//             certifications: "NSF H1, ISO 21469",
//           },
//           applications: [
//             "Food processing equipment",
//             "Beverage industry",
//             "Pharmaceutical machinery",
//           ],
//           image: "/images/products/oil-food.jpg",
//           brochure: "/brochures/foodsafe-lubricant.pdf",
//           safetyData: "/sds/foodsafe-lubricant-sds.pdf",
//         },
//         {
//           id: "PRD-005",
//           code: "ML-5000",
//           name: "HeavyDuty Engine Oil",
//           category: "oil",
//           subCategory: "engine",
//           description: "Premium heavy-duty diesel engine oil",
//           features: [
//             "Extended drain intervals",
//             "Soot control",
//             "Wear protection",
//             "Acid neutralization",
//           ],
//           specifications: {
//             viscosity: "SAE 15W-40",
//             tempRange: "-25°C to 190°C",
//             baseOil: "Mineral/Synthetic Blend",
//             certifications: "API CK-4, ACEA E9",
//           },
//           applications: [
//             "Commercial trucks",
//             "Construction equipment",
//             "Marine diesel engines",
//           ],
//           image: "/images/products/oil-heavy-duty.jpg",
//           brochure: "/brochures/heavyduty-engine.pdf",
//           safetyData: "/sds/heavyduty-engine-sds.pdf",
//         },
//       ];

//       // Simulate network delay
//       await new Promise((resolve) => setTimeout(resolve, 800));

//       setFilteredProducts(sampleProducts);
//       setIsLoading(false);
//     };

//     fetchProducts();
//   }, []);

//   const filterProducts = (categoryId: SetStateAction<string>) => {
//     setActiveCategory(categoryId);
//     // navigate(`/products${categoryId === "all" ? "" : `/${categoryId}`}`);
//   };

//   const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
//     setSearchTerm(e.target.value);
//     // Implement search functionality here
//   };

//   if (isLoading) {
//     return (
//       <div className="loading-container">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           className="loading-spinner"
//         >
//           <svg
//             width="48"
//             height="48"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//           >
//             <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
//           </svg>
//         </motion.div>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "reverse",
//             duration: 1.5,
//           }}
//         >
//           Loading our premium products...
//         </motion.p>
//       </div>
//     );
//   }

//   return (
//     <div className="products-page">
//       {/* Hero Section */}
//       <motion.section
//         className="products-hero"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="hero-content">
//           <motion.h1
//             initial={{ y: -20 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Advanced Lubrication Solutions
//           </motion.h1>
//           <motion.p
//             initial={{ y: 20 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Engineered for performance, built for durability
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* Main Content */}
//       <main className="products-container">
//         {/* Category Navigation */}
//         <motion.nav
//           className="category-nav"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <ul>
//             {productCategories.map((category) => (
//               <motion.li
//                 key={category.id}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={activeCategory === category.id ? "active" : ""}
//                 onClick={() => filterProducts(category.id)}
//               >
//                 {category.label}
//                 {activeCategory === category.id && (
//                   <motion.div
//                     className="underline"
//                     layoutId="underline"
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   />
//                 )}
//               </motion.li>
//             ))}
//           </ul>
//         </motion.nav>

//         {/* Search and Filter */}
//         <motion.div
//           className="products-controls"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <div className="search-box">
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//             >
//               <circle cx="11" cy="11" r="8" />
//               <path d="M21 21l-4.35-4.35" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <div className="filter-options">
//             <span>Filter by:</span>
//             <select>
//               <option>All Applications</option>
//               <option>Industrial</option>
//               <option>Automotive</option>
//               <option>Food Processing</option>
//             </select>
//           </div>
//         </motion.div>

//         {/* Products Grid */}
//         <AnimatePresence>
//           <motion.div
//             className="products-grid"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//           >
//             {filteredProducts
//               .filter(
//                 (product) =>
//                   activeCategory === "all" ||
//                   product.category === activeCategory ||
//                   product.subCategory === activeCategory
//               )
//               .map((product, index) => (
//                 <motion.article
//                   key={product.id}
//                   className="product-card"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{
//                     y: -5,
//                     boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
//                   }}
//                   exit={{ opacity: 0 }}
//                   layout
//                 >
//                   <div className="product-badge">
//                     <span className="product-id">{product.id}</span>
//                     <span className="product-code">{product.code}</span>
//                   </div>

//                   <div className="product-image">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       loading="lazy"
//                     />
//                     <div className="product-category">
//                       {product.category} / {product.subCategory}
//                     </div>
//                   </div>

//                   <div className="product-info">
//                     <h3>{product.name}</h3>
//                     <p className="product-description">{product.description}</p>

//                     <div className="product-features">
//                       <h4>Key Features</h4>
//                       <ul>
//                         {product.features.slice(0, 3).map((feature, i) => (
//                           <li key={i}>{feature}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="product-specs">
//                       <h4>Technical Specifications</h4>
//                       <div className="spec-grid">
//                         <div>
//                           <span>Viscosity</span>
//                           <strong>{product.specifications.viscosity}</strong>
//                         </div>
//                         <div>
//                           <span>Temp Range</span>
//                           <strong>{product.specifications.tempRange}</strong>
//                         </div>
//                         {product.specifications.certifications && (
//                           <div>
//                             <span>Certifications</span>
//                             <strong>
//                               {product.specifications.certifications}
//                             </strong>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="product-actions">
//                     <motion.button
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                       className="primary-btn"
//                     >
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                       >
//                         <path d="M21 3l-6 6" />
//                         <path d="M21 9l-6-6" />
//                         <path d="M3 21l6-6" />
//                         <path d="M3 15l6 6" />
//                       </svg>
//                       Request Info
//                     </motion.button>
//                     <div className="secondary-actions">
//                       <motion.a
//                         href={product.brochure}
//                         download
//                         whileHover={{ scale: 1.03 }}
//                         whileTap={{ scale: 0.97 }}
//                         className="secondary-btn"
//                       >
//                         <svg
//                           width="16"
//                           height="16"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                         >
//                           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                           <polyline points="7 10 12 15 17 10" />
//                           <line x1="12" y1="15" x2="12" y2="3" />
//                         </svg>
//                         Brochure
//                       </motion.a>
//                       <motion.a
//                         href={product.safetyData}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.03 }}
//                         whileTap={{ scale: 0.97 }}
//                         className="secondary-btn"
//                       >
//                         <svg
//                           width="16"
//                           height="16"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                         >
//                           <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//                           <polyline points="14 2 14 8 20 8" />
//                           <line x1="16" y1="13" x2="8" y2="13" />
//                           <line x1="16" y1="17" x2="8" y2="17" />
//                           <polyline points="10 9 9 9 8 9" />
//                         </svg>
//                         SDS
//                       </motion.a>
//                     </div>
//                   </div>
//                 </motion.article>
//               ))}
//           </motion.div>
//         </AnimatePresence>
//       </main>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./Products.css";

// Type definitions for TypeScript
type Product = {
  id: string;
  code: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  features: string[];
  specifications: {
    viscosity: string;
    tempRange: string;
    baseOil: string;
    color?: string;
    certifications?: string;
  };
  applications: string[];
  image: string;
  brochure: string;
  safetyData: string;
};

type ProductCategory = {
  id: string;
  label: string;
};

const productCategories: ProductCategory[] = [
  { id: "all", label: "All Products" },
  { id: "grease", label: "Grease" },
  { id: "oil", label: "Oil" },
  { id: "engine", label: "Engine" },
  { id: "industrial", label: "Industrial" },
  { id: "food", label: "Food Grade" },
];

const Products: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState(category || "all");
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApplication, setSelectedApplication] = useState("all");

  // Fetch products data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // In a real app, this would be an API call
        const sampleProducts: Product[] = [
          {
            id: "PRD-001",
            code: "ML-1000",
            name: "MaxiLube Industrial Grease",
            category: "grease",
            subCategory: "industrial",
            description: "Heavy-duty grease for extreme industrial conditions",
            features: [
              "EP (Extreme Pressure) additives",
              "Water resistance",
              "Long service intervals",
              "Oxidation stability",
            ],
            specifications: {
              viscosity: "NLGI Grade 2",
              tempRange: "-30°C to 180°C",
              baseOil: "Lithium Complex",
              color: "Dark Brown",
            },
            applications: [
              "Mining equipment",
              "Steel mills",
              "Paper machinery",
            ],
            image: "/images/products/grease-industrial.jpg",
            brochure: "/brochures/maxilube-industrial.pdf",
            safetyData: "/sds/maxilube-industrial-sds.pdf",
          },
          // ... (other product data remains the same)
        ];

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        setProducts(sampleProducts);
        setFilteredProducts(sampleProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle category changes from URL
  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);

  // Filter products based on active category, search term, and application
  useEffect(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter(
        (product) =>
          product.category === activeCategory ||
          product.subCategory === activeCategory
      );
    }

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          product.features.some((f) => f.toLowerCase().includes(term))
      );
    }

    // Application filter
    if (selectedApplication !== "all") {
      result = result.filter((product) =>
        product.applications.some((app) =>
          app.toLowerCase().includes(selectedApplication.toLowerCase())
        )
      );
    }

    setFilteredProducts(result);
  }, [activeCategory, searchTerm, selectedApplication, products]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    navigate(`/products${categoryId === "all" ? "" : `/${categoryId}`}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleApplicationFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedApplication(e.target.value);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="loading-spinner"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
        >
          Loading{" "}
          {activeCategory === "all" ? "products" : `${activeCategory} products`}
          ...
        </motion.p>
      </div>
    );
  }

  // Get unique applications for filter dropdown
  const allApplications = Array.from(
    new Set(products.flatMap((product) => product.applications))
  );

  return (
    <div className="products-page">
      {/* Hero Section */}
      <motion.section
        className="products-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Advanced Lubrication Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Engineered for performance, built for durability
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="products-container">
        {/* Category Navigation */}
        <motion.nav
          className="category-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ul>
            {productCategories.map((category) => (
              <motion.li
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={activeCategory === category.id ? "active" : ""}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.label}
                {activeCategory === category.id && (
                  <motion.div
                    className="underline"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Search and Filter */}
        <motion.div
          className="products-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="search-box">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              aria-label="Search products"
            />
          </div>
          <div className="filter-options">
            <span>Filter by:</span>
            <select
              value={selectedApplication}
              onChange={handleApplicationFilter}
              aria-label="Filter by application"
            >
              <option value="all">All Applications</option>
              {allApplications.map((app) => (
                <option key={app} value={app}>
                  {app}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence>
          {filteredProducts.length > 0 ? (
            <motion.div
              className="products-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              key="products-grid"
            >
              {filteredProducts.map((product, index) => (
                <motion.article
                  key={product.id}
                  className="product-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                  }}
                  exit={{ opacity: 0 }}
                  layout
                >
                  <div className="product-badge">
                    <span className="product-id">{product.id}</span>
                    <span className="product-code">{product.code}</span>
                  </div>

                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                    <div className="product-category">
                      {product.category} / {product.subCategory}
                    </div>
                  </div>

                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>

                    <div className="product-features">
                      <h4>Key Features</h4>
                      <ul>
                        {product.features.slice(0, 3).map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="product-specs">
                      <h4>Technical Specifications</h4>
                      <div className="spec-grid">
                        <div>
                          <span>Viscosity</span>
                          <strong>{product.specifications.viscosity}</strong>
                        </div>
                        <div>
                          <span>Temp Range</span>
                          <strong>{product.specifications.tempRange}</strong>
                        </div>
                        {product.specifications.certifications && (
                          <div>
                            <span>Certifications</span>
                            <strong>
                              {product.specifications.certifications}
                            </strong>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="product-actions">
                    <Link to={`/product/${product.id}`} className="primary-btn">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M21 3l-6 6" />
                        <path d="M21 9l-6-6" />
                        <path d="M3 21l6-6" />
                        <path d="M3 15l6 6" />
                      </svg>
                      View Details
                    </Link>
                    <div className="secondary-actions">
                      <a
                        href={product.brochure}
                        download
                        className="secondary-btn"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Brochure
                      </a>
                      <a
                        href={product.safetyData}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-btn"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                        SDS
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key="no-results"
            >
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Products;

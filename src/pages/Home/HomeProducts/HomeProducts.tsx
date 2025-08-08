import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./HomeProducts.css";

const featuredProducts = [
  {
    id: "prod-001",
    code: "FL150",
    name: "FRILLUBE FL150 PPPE Oil",
    description: "Long-lasting performance oil for industrial applications",
    category: "oil",
    image: "/images/products/fl150.jpg",
    features: [
      "Extended service life",
      "High temperature stability",
      "Corrosion protection",
    ],
  },
  {
    id: "prod-002",
    code: "SG10G",
    name: "FRILLUBE SG Series",
    description: "10g Tube Dielectric grease for electrical components",
    category: "grease",
    image: "/images/products/sg-series.jpg",
    features: [
      "Waterproof sealing",
      "Excellent conductivity",
      "Prevents corrosion",
    ],
  },
  {
    id: "prod-003",
    code: "PRE01",
    name: "FRILLUBE PR E01",
    description: "Injection molding machine lubricant",
    category: "specialty",
    image: "/images/products/pr-e01.jpg",
    features: [
      "Reduces friction",
      "Extends mold life",
      "High pressure resistance",
    ],
  },
  {
    id: "prod-004",
    code: "F1227",
    name: "FRILLUBE F1.227",
    description: "Long-term high temperature grease",
    category: "grease",
    image: "/images/products/f1-227.jpg",
    features: [
      "Withstands extreme temps",
      "Minimal evaporation",
      "Long service intervals",
    ],
  },
];

const HomeProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="home-products">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">OUR PRODUCTS</h2>
          <h3 className="section-subtitle">HOT PRODUCTS</h3>
          <Link to="/products" className="view-all">
            View All Products →
          </Link>
        </motion.div>

        {/* Products Carousel */}
        <div className="carousel-container">
          <button
            onClick={scrollLeft}
            className="carousel-button left"
            aria-label="Scroll left"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="products-carousel" ref={scrollRef}>
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="product-card"
              >
                <Link to={`/products/${product.id}`} className="product-link">
                  <div className="product-image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      loading="lazy"
                    />
                    <div className="product-badge">{product.code}</div>
                  </div>

                  <div className="product-info">
                    <h4 className="product-name">{product.name}</h4>
                    <p className="product-description">{product.description}</p>

                    <ul className="product-features">
                      {product.features.slice(0, 2).map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-cta">
                    <span className="more-link">More →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="carousel-button right"
            aria-label="Scroll right"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;

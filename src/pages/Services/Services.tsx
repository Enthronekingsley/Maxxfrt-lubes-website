import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./Services.css";

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  brochure?: string;
  caseStudies?: string[];
};

type ServiceCategory = {
  id: string;
  label: string;
  href: string;
};

const serviceCategories: ServiceCategory[] = [
  { id: "sales", label: "Sales", href: "/services/sales" },
  { id: "service", label: "Maintenance", href: "/services/service" },
  { id: "consulting", label: "Consulting", href: "/services/consulting" },
  { id: "training", label: "Training", href: "/services/training" },
  { id: "custom", label: "Custom Solutions", href: "/services/custom" },
];

const servicesData: Record<string, Service> = {
  sales: {
    id: "SRV-001",
    title: "Product Sales & Distribution",
    description:
      "Our comprehensive sales network ensures you get the right lubricants when and where you need them.",
    features: [
      "Global distribution network",
      "Technical sales support",
      "Just-in-time delivery",
      "Inventory management",
    ],
    image: "/images/services/sales.jpg",
    brochure: "/brochures/sales-services.pdf",
  },
  service: {
    id: "SRV-002",
    title: "Maintenance Services",
    description:
      "Professional lubrication services to maximize equipment performance and lifespan.",
    features: [
      "On-site lubrication services",
      "Oil analysis programs",
      "Preventive maintenance",
      "Equipment inspections",
    ],
    image: "/images/services/service.jpg",
    caseStudies: [
      "/case-studies/mining-equipment",
      "/case-studies/manufacturing-plant",
    ],
  },
  consulting: {
    id: "SRV-003",
    title: "Technical Consulting",
    description:
      "Expert advice to optimize your lubrication processes and reduce total cost of ownership.",
    features: [
      "Lubrication audits",
      "Product selection",
      "Application engineering",
      "Troubleshooting",
    ],
    image: "/images/services/consulting.jpg",
  },
  training: {
    id: "SRV-004",
    title: "Training Programs",
    description:
      "Comprehensive training to empower your team with lubrication expertise.",
    features: [
      "Certification courses",
      "On-site training",
      "Customized programs",
      "Online learning modules",
    ],
    image: "/images/services/training.jpg",
    brochure: "/brochures/training-programs.pdf",
  },
  custom: {
    id: "SRV-005",
    title: "Custom Solutions",
    description:
      "Tailored lubrication solutions designed for your specific operational challenges.",
    features: [
      "Formulation development",
      "Specialty packaging",
      "Application-specific solutions",
      "Performance testing",
    ],
    image: "/images/services/custom.jpg",
  },
};

const benefitCards = [
  {
    title: "Industry Expertise",
    description: "20+ years in lubrication technology",
    icon: "👨‍🔬",
  },
  {
    title: "Global Support",
    description: "Available in 30+ countries",
    icon: "🌎",
  },
  {
    title: "Custom Solutions",
    description: "Tailored to your specific needs",
    icon: "🛠️",
  },
  {
    title: "Quality Assurance",
    description: "ISO 9001 certified processes",
    icon: "✅",
  },
];

const Services: React.FC = () => {
  const { serviceId } = useParams<{ serviceId?: string }>();
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(serviceId || "sales");
  const [isLoading] = useState(false);

  // Handle service changes from URL
  useEffect(() => {
    if (serviceId && servicesData[serviceId]) {
      setActiveService(serviceId);
    }
  }, [serviceId]);

  const handleServiceChange = (serviceId: string) => {
    setActiveService(serviceId);
    navigate(`/services/${serviceId}`);
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
          Loading service information...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="services-page">
      {/* Hero Section */}
      <motion.section
        className="services-hero"
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
            Comprehensive Lubrication Services
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Beyond products - delivering complete lubrication solutions
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="services-container">
        {/* Service Navigation */}
        <motion.nav
          className="service-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ul>
            {serviceCategories.map((service) => (
              <motion.li
                key={service.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={activeService === service.id ? "active" : ""}
                onClick={() => handleServiceChange(service.id)}
              >
                {service.label}
                {activeService === service.id && (
                  <motion.div
                    className="underline"
                    layoutId="serviceUnderline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.section
            className="service-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            key={activeService}
          >
            <div className="service-details">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="service-text"
              >
                <div className="service-badge">
                  <span>{servicesData[activeService].id}</span>
                </div>

                <h2>{servicesData[activeService].title}</h2>
                <p className="service-description">
                  {servicesData[activeService].description}
                </p>

                <div className="service-features">
                  <h3>Our Offerings</h3>
                  <ul>
                    {servicesData[activeService].features.map(
                      (feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.4 + index * 0.1,
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {feature}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>

                <div className="service-actions">
                  <Link to="/contact" className="cta-button">
                    Request Service Consultation
                  </Link>
                  {servicesData[activeService].brochure && (
                    <a
                      href={servicesData[activeService].brochure}
                      download
                      className="secondary-btn"
                    >
                      Download Service Brochure
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="service-image"
              >
                <img
                  src={servicesData[activeService].image}
                  alt={servicesData[activeService].title}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.section>
        </AnimatePresence>

        {/* Additional Services Info */}
        <motion.section
          className="additional-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3>Why Choose Our Services?</h3>
          <div className="benefits-grid">
            {benefitCards.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Case Studies (if available) */}
        {servicesData[activeService].caseStudies && (
          <motion.section
            className="case-studies"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h3>Related Case Studies</h3>
            <div className="case-study-grid">
              {servicesData[activeService].caseStudies?.map((study, index) => (
                <Link to={study} key={index} className="case-study-card">
                  <h4>Case Study #{index + 1}</h4>
                  <p>View our successful implementation</p>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
};

export default Services;

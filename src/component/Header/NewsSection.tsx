import { motion, Variants } from "framer-motion";
import newsImage from "../../assets/hero_img.png";
import { FiArrowRightCircle } from "react-icons/fi";

const NewsSection = () => {
  const containerVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.7,
      },
    },
  };

  const newsItems = [
    {
      id: 1,
      title: "Dynamic Viscosity vs. Kinematic V...",
      date: "Aug05,2025",
      excerpt:
        "Difference between Dynamic Viscosity and Kinematic Viscosity Viscosity is the most important property of a Matic a...",
      image: newsImage,
    },
    {
      id: 2,
      title: "Products For Reactive Gas Valve A...",
      date: "Jul18,2025",
      excerpt:
        "FRTUUBE valve lubricants For many years, FRTUUBE oils and greases have provided safe, non-reactive, long-lasting p...",
      image: newsImage,
    },
    {
      id: 3,
      title: "The role of open-mouth flash poin...",
      date: "Jul09,2025",
      excerpt:
        "The role of open-mouth flash point testing of lubricating greases Grease is an indispensable lubricating materia...",
      image: newsImage,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 uppercase"
            variants={itemVariants}
          >
            LATEST INFORMATION
          </motion.h2>
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-blue-600"
            variants={itemVariants}
          >
            NEWS
          </motion.h3>
        </motion.div>

        {/* News Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, margin: "-50px" }}
        >
          {newsItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Image Container */}
              <motion.div
                className="h-48 overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Text Container */}
              <motion.div
                className="p-6 relative"
                initial={{ backgroundColor: "#ffffff" }}
                whileHover={{
                  backgroundColor: "#1e40af",
                  color: "#000000",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <span className="text-sm text-blue-600">{`Date: ${item.date}`}</span>
                  <h4 className="text-xl font-bold mt-2 group-hover:text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-600 group-hover:text-gray-200 mb-6">
                  {item.excerpt}
                </p>

                {/* Animated Read More */}
                <motion.a
                  href="#"
                  className="flex items-center text-blue-600 font-medium group-hover:text-white"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  View More
                  <motion.span
                    className="ml-2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiArrowRightCircle className="text-xl" />
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;

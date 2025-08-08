import { motion, Variants } from "framer-motion";
import { FaOilCan } from "react-icons/fa";

const AdvantagesSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  const iconVariants: Variants = {
    rest: { rotate: 0 },
    hover: {
      rotate: [0, -10, 10, -5, 5, 0],
      transition: { duration: 0.6 },
    },
  };

  const advantages = [
    {
      title: "Source Manufacturer",
      description:
        "FRTUBE lubricants is a leader in the innovation, formulation and manufacture of specialty lubricants in China market. FRTUBE are tailor-made speciality lubricant manufacturer.",
      icon: <FaOilCan className="text-4xl text-blue-600" />,
    },
    {
      title: "Our Organization",
      description:
        "Our lubricant technical team with our customers to sure application-oriented and holistic lubrication solutions are a central.",
      icon: <FaOilCan className="text-4xl text-blue-600" />,
    },
    {
      title: "Our Mission",
      description:
        "FRTUBE is committed to provide added-value based solutions to sure the optimum solution for customers.",
      icon: <FaOilCan className="text-4xl text-blue-600" />,
    },
    {
      title: "Our Vision",
      description:
        "Energy savings, down-time minimization or components lifetime improvement.",
      icon: <FaOilCan className="text-4xl text-blue-600" />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 uppercase"
            variants={itemVariants}
          >
            ADVANTAGES
          </motion.h2>
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-blue-600"
            variants={itemVariants}
          >
            WHY CHOOSE US
          </motion.h3>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="mb-6"
              >
                {advantage.icon}
              </motion.div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                {advantage.title}
              </h4>
              <p className="text-gray-600 mb-6 flex-grow">
                {advantage.description}
              </p>
              {index === 0 && (
                <a
                  href="#"
                  className="text-blue-600 font-medium flex items-center mt-auto"
                >
                  Read More <span className="ml-2">{">"}</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

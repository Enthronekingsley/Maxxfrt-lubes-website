import { motion, Variants } from "framer-motion";
import Title from "../component/Title";
import { assets } from "../assets/assets";
import { FaFlask, FaIndustry, FaLeaf, FaShieldAlt } from "react-icons/fa";

const About = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  const featureVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: false, margin: "-100px" }}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <motion.div className="text-center pt-16 pb-12" variants={itemVariants}>
          <Title text1={"ABOUT"} text2={"MAXxFRT-LUBE"} />
          <motion.p
            className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto px-4"
            variants={itemVariants}
          >
            Pioneering lubrication solutions for industrial excellence since
            2010
          </motion.p>
        </motion.div>

        {/* Animated Background Element */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-blue-50 -z-10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="my-10 flex flex-col md:flex-row gap-16 max-w-7xl mx-auto px-4">
        {/* Image with Animation */}
        <motion.div
          className="w-full md:w-1/2"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={assets.about_img}
            alt="MaxxFRT-Lube manufacturing facility"
            className="w-full rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants}>
            MaxxFRT-Lube stands at the forefront of specialty grease
            manufacturing in the UK, combining cutting-edge technology with
            decades of lubrication expertise. Founded in 2010, we've grown from
            a local supplier to an internationally recognized name in industrial
            lubrication solutions.
          </motion.p>

          <motion.p variants={itemVariants}>
            Our state-of-the-art facility in Manchester houses advanced R&D labs
            and precision manufacturing equipment, enabling us to formulate
            greases that outperform industry standards. From automotive to heavy
            industry applications, our products are engineered to withstand
            extreme conditions.
          </motion.p>

          <motion.div variants={itemVariants}>
            <b className="text-gray-800 text-lg">Our Mission</b>
            <p>
              To deliver innovative lubrication solutions that enhance equipment
              performance, reduce maintenance costs, and extend operational
              lifespans for industries worldwide.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 mt-4"
            variants={containerVariants}
          >
            {[
              { icon: <FaFlask className="text-2xl" />, text: "R&D Driven" },
              {
                icon: <FaIndustry className="text-2xl" />,
                text: "UK Manufactured",
              },
              { icon: <FaLeaf className="text-2xl" />, text: "Eco-Friendly" },
              {
                icon: <FaShieldAlt className="text-2xl" />,
                text: "ISO Certified",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-blue-600">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div className="py-12 bg-gray-50" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <Title text1={"WHY"} text2={"CHOOSE MAXxFRT"} />
            <p className="text-gray-600 mt-4">
              What sets our lubrication solutions apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Formulations",
                icon: <FaFlask className="text-3xl mb-4 text-blue-600" />,
                content:
                  "Our chemists develop bespoke grease formulations tailored to your specific operating conditions and performance requirements.",
              },
              {
                title: "Quality Assurance",
                icon: <FaShieldAlt className="text-3xl mb-4 text-blue-600" />,
                content:
                  "Every batch undergoes rigorous testing in our in-house laboratories to ensure consistent quality and performance.",
              },
              {
                title: "Technical Expertise",
                icon: <FaIndustry className="text-3xl mb-4 text-blue-600" />,
                content:
                  "Our lubrication specialists provide ongoing support and recommendations to optimize your maintenance programs.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center"
                whileHover="hover"
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;

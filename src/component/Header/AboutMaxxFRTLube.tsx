import { motion, Variants } from "framer-motion";
import companyImage from "../../assets/companyImage.png";

const AboutMaxxFRTLube = () => {
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

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ margin: "-100px" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 uppercase tracking-wide"
              variants={itemVariants}
            >
              QUICKLY LEARN ABOUT MAXXFRT-LUBE
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              MaxxFrt-Lube. Ltd. located in the Pearl River Delta, one of
              advanced industrial regions in China. Our 20K square-foot
              Sturde-based complex includes R&D and production labs, clean room
              operations, packaging and production labs, and administrative
              offices.
            </motion.p>

            <motion.div className="flex gap-4" variants={itemVariants}>
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Now
              </motion.button>
              <motion.button
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Media Content - Choose either image or video */}
          <motion.div
            className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{}}
          >
            {/* Option 1: Image with smooth hover animation */}
            <motion.img
              src={companyImage}
              alt="FRTLUBE facility"
              className="w-full h-auto object-cover rounded-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMaxxFRTLube;

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import about from "../../assets/contact_img.png";

const AboutSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const textVariants: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const imageVariants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ABOUT OUR COMPANY
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex flex-col lg:flex-row gap-8 items-center"
        >
          {/* Text Content - Left Side */}
          <motion.div className="lg:w-1/2" variants={textVariants}>
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-800"
              variants={textVariants}
            >
              WHAT DO WE DO?
            </motion.h3>

            <motion.div
              className="text-base md:text-lg text-gray-600 mb-8 leading-normal space-y-4"
              variants={textVariants}
            >
              <p>
                MaxxFRT-Lube, founded in 2010, is a leader in the Innovation,
                formulation and manufacture of specialty lubricants in the China
                market.
              </p>
              <p>
                With a professional R&D service team and first-class production
                testing equipment, we deliver cutting-edge lubrication
                solutions.
              </p>
              <p>
                Our passionate team is dedicated to solving your most
                challenging lubrication problems with innovative approaches.
              </p>
            </motion.div>

            <motion.button
              className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors text-base"
              variants={textVariants}
              whileHover={{ x: 5, scale: 1.05 }}
            >
              View More <span className="text-xl">→</span>
            </motion.button>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div className="lg:w-1/2" variants={imageVariants}>
            <img
              src={about}
              alt="Fritube manufacturing facility"
              className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

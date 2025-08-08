import { assets } from "../assets/assets.ts";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: [1.05, 1],
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="
        relative w-full
        overflow-hidden
        aspect-[16/9]
        sm:aspect-[21/9]
      "
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={controls}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        <img
          src={assets.hero_img}
          alt="Industrial lubricant background"
          className="w-full h-full object-fill"
          style={{
            objectPosition: "center center",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={assets.hero_img}
          alt="Industrial lubricant background"
          className="w-full h-full object-fill opacity-0"
        />
      </motion.div>
    </div>
  );
};

export default Hero;

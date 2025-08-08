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
        scale: [1.2, 1],
        transition: {
          duration: 3,
          ease: "easeInOut",
        },
      });
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[80vh] min-h-[500px] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-black/30 z-0"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={controls}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        <img
          src={assets.hero_img}
          alt="Industrial lubricant background"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center center",
            width: "100%",
            height: "100%",
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
          className="w-full h-full object-cover opacity-0"
        />
      </motion.div>
    </div>
  );
};

export default Hero;

// import { assets } from "../assets/assets.ts";
// import { motion, useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";

// const Hero = () => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false });

//   useEffect(() => {
//     if (isInView) {
//       controls.start({
//         scale: [1.1, 1],
//         transition: {
//           duration: 2,
//           ease: "easeInOut",
//         },
//       });
//     }
//   }, [isInView, controls]);

//   return (
//     <div
//       ref={ref}
//       className="relative w-full h-[80vh] min-h-[500px] overflow-hidden"
//     >
//       <motion.div
//         className="absolute inset-0 bg-black/30 z-0 flex items-center justify-center"
//         initial={{ opacity: 0, scale: 1.2 }}
//         animate={controls}
//         whileInView={{
//           opacity: 1,
//           transition: { duration: 1 },
//         }}
//         style={{
//           transformOrigin: "center center",
//           willChange: "transform",
//         }}
//       >
//         <img
//           src={assets.hero_img}
//           alt="Industrial lubricant background"
//           className="w-full h-full object-contain md:object-cover"
//           style={{
//             objectPosition: "center center",
//             maxWidth: "100%",
//             maxHeight: "100%",
//           }}
//         />
//       </motion.div>

//       {/* Optional: Keep your subtle background animation if needed */}
//       <motion.div
//         className="absolute inset-0 z-0"
//         initial={{ scale: 1 }}
//         animate={{
//           scale: [1, 1.02, 1],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <img
//           src={assets.hero_img}
//           alt="Industrial lubricant background"
//           className="w-full h-full object-cover opacity-0"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;

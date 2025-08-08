// import { motion, Variants } from "framer-motion";
// import foodIndustryImage from "../../assets/hero_img.png";
// import electronicsImage from "../../assets/hero_img.png";

// const CompanySolutions = () => {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.6,
//       },
//     },
//   };

//   const cardVariants: Variants = {
//     hidden: { scale: 0.9, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <section className="py-16 px-4 md:px-8 lg:px-16 bg-blue-800">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={containerVariants}
//           viewport={{ margin: "-100px" }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase"
//             variants={itemVariants}
//           >
//             COMPANY SOLUTIONS
//           </motion.h2>
//           <motion.h3
//             className="text-2xl md:text-3xl font-semibold text-blue-200"
//             variants={itemVariants}
//           >
//             APPLICATION CASES
//           </motion.h3>
//         </motion.div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Food & Medicine Industry Card */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={cardVariants}
//             viewport={{ margin: "-50px" }}
//             className="bg-white rounded-xl shadow-2xl overflow-hidden"
//           >
//             <div className="h-48 overflow-hidden">
//               <img
//                 src={foodIndustryImage}
//                 alt="Food industry application"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-8">
//               <h4 className="text-2xl font-bold text-blue-800 mb-6">
//                 FOOD & MEDICINE INDUSTRY
//               </h4>
//               <div className="h-1 bg-blue-600 w-20 mb-6"></div>
//               <h5 className="text-xl font-semibold text-gray-800 mb-4">
//                 FATILIBE FOOD GRADE GREASE
//               </h5>
//               <p className="text-gray-600">
//                 Customer Motamed Radlin is specialist in beverage industry from
//                 Egypt, and the anti-wear and barrier effect of the safety during
//                 reentrinating, resisting in leasing. During normal operation,
//                 the grease will be thrown from the bearing seat, has the bearing
//                 and lead to positive the production law and equipments.
//               </p>
//             </div>
//           </motion.div>

//           {/* Electronics Card */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={cardVariants}
//             viewport={{ margin: "-50px" }}
//             className="bg-white rounded-xl shadow-2xl overflow-hidden"
//           >
//             <div className="h-48 overflow-hidden">
//               <img
//                 src={electronicsImage}
//                 alt="Electronics industry application"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-8">
//               <h4 className="text-2xl font-bold text-blue-800 mb-6">
//                 ELECTRONICS
//               </h4>
//               <div className="h-1 bg-blue-600 w-20 mb-6"></div>
//               <div className="min-h-[200px]">
//                 {/* Placeholder for electronics content */}
//                 <p className="text-gray-500 italic">
//                   Application case details for electronics industry
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanySolutions;

// import { motion, Variants } from "framer-motion";
// import foodIndustryImage from "../../assets/hero_img.png";
// import electronicsImage from "../../assets/hero_img.png";

// const CompanySolutions = () => {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.6,
//       },
//     },
//   };

//   const cardVariants: Variants = {
//     hidden: { scale: 0.9, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   // Sample data for cards (can be expanded)
//   const caseStudies = [
//     {
//       id: 1,
//       title: "FOOD & MEDICINE INDUSTRY",
//       subtitle: "FATILIBE FOOD GRADE GREASE",
//       description:
//         "Customer Motamed Radlin is specialist in beverage industry from Egypt, and the anti-wear and barrier effect of the safety during reentrinating, resisting in leasing. During normal operation, the grease will be thrown from the bearing seat, has the bearing and lead to positive the production law and equipments.",
//       image: foodIndustryImage,
//     },
//     {
//       id: 2,
//       title: "ELECTRONICS",
//       subtitle: "",
//       description: "Application case details for electronics industry",
//       image: electronicsImage,
//     },
//     // Add more cases as needed
//     {
//       id: 3,
//       title: "AUTOMOTIVE",
//       subtitle: "HIGH TEMP BEARING GREASE",
//       description:
//         "Specialized lubricants for automotive applications under extreme conditions.",
//       image: electronicsImage, // Replace with actual image
//     },
//     {
//       id: 4,
//       title: "MARINE",
//       subtitle: "WATER-RESISTANT FORMULA",
//       description:
//         "Corrosion-resistant lubricants for marine environments and saltwater applications.",
//       image: foodIndustryImage, // Replace with actual image
//     },
//   ];

//   return (
//     <section className="py-16 px-4 md:px-8 lg:px-16 bg-blue-800">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={containerVariants}
//           viewport={{ margin: "-100px" }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase"
//             variants={itemVariants}
//           >
//             COMPANY SOLUTIONS
//           </motion.h2>
//           <motion.h3
//             className="text-2xl md:text-3xl font-semibold text-blue-200"
//             variants={itemVariants}
//           >
//             APPLICATION CASES
//           </motion.h3>
//         </motion.div>

//         {/* Horizontally Scrollable Cards */}
//         <div className="relative">
//           <div className="overflow-x-auto pb-6 -mx-4 px-4">
//             <div className="flex space-x-8 w-max min-w-full">
//               {caseStudies.map((caseStudy) => (
//                 <motion.div
//                   key={caseStudy.id}
//                   initial="hidden"
//                   whileInView="visible"
//                   variants={cardVariants}
//                   viewport={{ margin: "-50px" }}
//                   className="flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[35vw] bg-white rounded-xl shadow-2xl overflow-hidden"
//                 >
//                   <div className="h-48 overflow-hidden">
//                     <img
//                       src={caseStudy.image}
//                       alt={`${caseStudy.title} application`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-8">
//                     <h4 className="text-2xl font-bold text-blue-800 mb-6">
//                       {caseStudy.title}
//                     </h4>
//                     <div className="h-1 bg-blue-600 w-20 mb-6"></div>
//                     {caseStudy.subtitle && (
//                       <h5 className="text-xl font-semibold text-gray-800 mb-4">
//                         {caseStudy.subtitle}
//                       </h5>
//                     )}
//                     <p className="text-gray-600">{caseStudy.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanySolutions;

import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import foodIndustryImage from "../../assets/hero_img.png";
import electronicsImage from "../../assets/hero_img.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CompanySolutions = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const cardVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const caseStudies = [
    {
      id: 1,
      title: "FOOD & MEDICINE INDUSTRY",
      subtitle: "FATILIBE FOOD GRADE GREASE",
      description:
        "Customer Motamed Radlin is specialist in beverage industry from Egypt, and the anti-wear and barrier effect of the safety during reentrinating, resisting in leasing. During normal operation, the grease will be thrown from the bearing seat, has the bearing and lead to positive the production law and equipments.",
      image: foodIndustryImage,
    },
    {
      id: 2,
      title: "ELECTRONICS",
      subtitle: "",
      description: "Application case details for electronics industry",
      image: electronicsImage,
    },
    {
      id: 3,
      title: "AUTOMOTIVE",
      subtitle: "HIGH TEMP BEARING GREASE",
      description:
        "Specialized lubricants for automotive applications under extreme conditions.",
      image: electronicsImage,
    },
    {
      id: 4,
      title: "MARINE",
      subtitle: "WATER-RESISTANT FORMULA",
      description:
        "Corrosion-resistant lubricants for marine environments and saltwater applications.",
      image: foodIndustryImage,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-blue-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase"
            variants={itemVariants}
          >
            COMPANY SOLUTIONS
          </motion.h2>
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-blue-200"
            variants={itemVariants}
          >
            APPLICATION CASES
          </motion.h3>
        </motion.div>

        {/* Scrollable Container with Arrows */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-800 rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
          >
            <div className="flex space-x-8 w-max min-w-full">
              {caseStudies.map((caseStudy) => (
                <motion.div
                  key={caseStudy.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  viewport={{ margin: "-50px" }}
                  className="flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[35vw] bg-white rounded-xl shadow-2xl overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={`${caseStudy.title} application`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-blue-800 mb-6">
                      {caseStudy.title}
                    </h4>
                    <div className="h-1 bg-blue-600 w-20 mb-6"></div>
                    {caseStudy.subtitle && (
                      <h5 className="text-xl font-semibold text-gray-800 mb-4">
                        {caseStudy.subtitle}
                      </h5>
                    )}
                    <p className="text-gray-600">{caseStudy.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-800 rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanySolutions;

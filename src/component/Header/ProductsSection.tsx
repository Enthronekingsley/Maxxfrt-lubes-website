import { motion } from "framer-motion";

const ProductsSection = () => {
  const products = [
    {
      name: "MAXXFRTLUBE FL150 PPPE Oil Long-lasting...",
      link: "#",
    },
    {
      name: "MAXXFRTLUBE SG Series 10g Tube Dielectric...",
      link: "#",
    },
    {
      name: "MAXXFRTLUBE PR E01 Injection Molding M...",
      link: "#",
    },
    {
      name: "FRILLUBE F1.227 Long-term High Temp...",
      link: "#",
    },
    // Add more products as needed
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          HOT PRODUCTS
        </motion.h2>

        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          OUR PRODUCTS
        </motion.h3>

        {/* Horizontal scrollable container */}
        <div className="relative">
          <div className="overflow-x-auto pb-6 -mx-4 px-4">
            <div className="flex space-x-6 w-max min-w-full">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-medium text-gray-800 mb-4">
                    {product.name}
                  </h4>
                  <a
                    href={product.link}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    More <span className="text-xl ml-1">→</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

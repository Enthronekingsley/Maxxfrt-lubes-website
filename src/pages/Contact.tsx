import React from "react";
import { motion, Variants } from "framer-motion";
import Title from "../component/Title.tsx";
import logo from "../assets/logo.png";
import contact_img from "../assets/contact_img.png";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const formItemVariants: Variants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto"
    >
      {/* Title Section */}
      <motion.div
        className="text-center pt-10 border-t"
        variants={itemVariants}
      >
        <Title text1={"CONTACT"} text2={"US"} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="my-10 flex flex-col lg:flex-row gap-10 mb-10 px-4"
        variants={containerVariants}
      >
        {/* Left Side - Contact Info */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col"
          variants={containerVariants}
        >
          {/* Logo Section */}
          <motion.div
            className="flex flex-col items-center mb-8"
            variants={itemVariants}
          >
            <motion.img
              src={logo}
              alt="Company Logo"
              className="h-24 object-contain mb-6"
              variants={itemVariants}
            />

            {/* Company Image Section */}
            <motion.div
              className="w-full aspect-square rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={contact_img}
                alt="Our Company"
                className="w-full h-full object-cover"
              />
              <div className="bg-gray-50 p-4 text-center">
                <h3 className="font-medium text-gray-800">Our Headquarters</h3>
                <p className="text-sm text-gray-500 mt-1">New York, USA</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex-grow"
            variants={itemVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6 h-full flex flex-col justify-between">
              {[
                {
                  icon: (
                    <FiMail
                      className="text-blue-600 mt-1 flex-shrink-0"
                      size={20}
                    />
                  ),
                  title: "Email Us",
                  items: ["info@company.com", "support@company.com"],
                },
                {
                  icon: (
                    <FiPhone
                      className="text-blue-600 mt-1 flex-shrink-0"
                      size={20}
                    />
                  ),
                  title: "Call Us",
                  items: ["+1 (123) 456-7890", "+1 (987) 654-3210"],
                },
                {
                  icon: (
                    <FiMapPin
                      className="text-blue-600 mt-1 flex-shrink-0"
                      size={20}
                    />
                  ),
                  title: "Visit Us",
                  items: ["123 Business Avenue", "New York, NY 10001, USA"],
                },
                {
                  icon: (
                    <FiClock
                      className="text-blue-600 mt-1 flex-shrink-0"
                      size={20}
                    />
                  ),
                  title: "Working Hours",
                  items: [
                    "Monday - Friday: 9am - 6pm",
                    "Saturday: 10am - 4pm",
                    "Sunday: Closed",
                  ],
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 pt-4 first:pt-0"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {contact.icon}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {contact.title}
                    </h3>
                    <div className="text-gray-600 mt-1 space-y-1">
                      {contact.items.map((item, i) => (
                        <p key={i}>{item}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form and Map */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-8"
          variants={containerVariants}
        >
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md flex-grow"
            variants={itemVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-semibold text-gray-800 mb-6"
              variants={formItemVariants}
            >
              Send Us a Message
            </motion.h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 h-full flex flex-col"
            >
              <div className="flex-grow space-y-5">
                {[
                  {
                    id: "name",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Your name",
                  },
                  {
                    id: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "your.email@example.com",
                  },
                  {
                    id: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "+1 (123) 456-7890",
                  },
                  {
                    id: "message",
                    label: "Your Message",
                    type: "textarea",
                    placeholder: "Type your message here...",
                  },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    variants={formItemVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-gray-700 mb-1"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={field.placeholder}
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={field.placeholder}
                        required={field.type !== "tel"}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
                variants={formItemVariants}
                custom={4}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Google Map Section */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden flex-grow"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-semibold text-lg text-gray-800 p-4 border-b">
              Our Location
            </h3>
            <div className="aspect-square w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256836186!2d-73.98784492401405!3d40.74844047138952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map of Our Location"
              ></iframe>
            </div>
            <div className="p-4 text-center bg-gray-50">
              <p className="text-sm text-gray-600">
                123 Business Avenue, New York, NY 10001, USA
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}></motion.div>
    </motion.div>
  );
};

export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";

const ArtworkShowcase = () => {
  // Track which collection is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      className="bg-cover bg-center bg-no-repeat text-black min-h-screen flex flex-col items-center"
      style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/project-39ce3.appspot.com/o/IMG_9667.JPG?alt=media&token=b7a1becd-7294-4554-af60-03c5c07c5b93')" }}
      initial="visible"
      animate="visible"
      variants={containerVariants}
    >
      {/* Artwork Gallery with staggered animation */}
      <motion.div 
        className="relative flex flex-col gap-6 w-full md:max-w-[90vw] max-w-5xl py-12 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3, 4].map((index) => {
          const cardVariants = {
            hidden: { x: index % 2 === 0 ? -150 : 100, opacity: 0 },
            visible: { 
              x: 0, 
              opacity: 0.9,
              transition: { type: "spring", stiffness: 20, damping: 10 }
            },
            hover: { 
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }
          };

          return (
            <motion.div
              key={index}
              className="w-full md:h-[70vh] h-[50vh]  bg-white border-gray-200 border flex items-center justify-center text-gray-500 rounded-xl overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="flex flex-col items-center"
                animate={{ 
                  scale: hoveredIndex === index ? 1.1 : 1,
                  transition: { duration: 1.5 }
                }}
              >
                <span className="text-xl font-semibold">Collection {index}</span>
                
                {/* Extra content that appears on hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? "auto" : 0 
                  }}
                  transition={{ duration: 1.0 }}
                  className="text-sm text-center mt-2 hidden md:flex text-gray-400"
                >
                  Click to view all artworks in this collection
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Floating action button with animation */}
      <motion.button
        className="fixed bottom-6 right-6 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <span className="text-xl">+</span>
      </motion.button>
    </motion.div>
  );
};

export default ArtworkShowcase;

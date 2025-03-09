import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import A from '../assets/Collection1/penup_1662112489920772.jpg'
import B from '../assets/Collection2/penup_20220907_135250.jpg'
import C from '../assets/Collection3/penup_1671094274627972.jpg'
import D from '../assets/Collection4/pyschidelic.png'

const CollPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const collections = [
    {
      id: 1,
      bgImage: A,
      year: "2019",
      summary: "Abstract expressionism exploring color theory and emotional landscapes"
    },
    {
      id: 2,
      bgImage: B,
      year: "2021",
      summary: "Minimalist compositions focusing on negative space and geometric forms"
    },
    {
      id: 3,
      bgImage: C,
      year: "2022",
      summary: "Nature-inspired works blending traditional techniques with digital elements"
    },
    {
      id: 4,
      bgImage: D,
      year: "2024",
      summary: "Psychedelic visual explorations of consciousness and perception"
    },
  ];

  const handleCollectionClick = (id) => {
    navigate(`/collection/${id}`);
  };

  return (
    <motion.div
      className="bg-cover bg-center bg-no-repeat text-black min-h-screen flex flex-col items-center"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/project-39ce3.appspot.com/o/IMG_9667.JPG?alt=media&token=b1561823-deb9-4115-b511-4c95d0205d5f')",
      }}
      initial="visible"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="relative w-full md:max-w-[90vw] max-w-5xl py-12 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map(({ id, bgImage, year, summary }) => {
            const cardVariants = {
              hidden: { y: 50, opacity: 0 },
              visible: {
                y: 0,
                opacity: 0.9,
                transition: { type: "spring", stiffness: 20, damping: 10 },
              },
              hover: {
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                transition: { type: "spring", stiffness: 400, damping: 10 },
              },
            };

            return (
              <motion.div
                key={id}
                className="w-full md:h-[40vh] h-[40vh] bg-white border-gray-200 border flex items-center justify-center text-gray-500 rounded-xl overflow-hidden cursor-pointer"
                style={{ background: `url(${bgImage}) center/cover no-repeat` }}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onHoverStart={() => setHoveredIndex(id)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => handleCollectionClick(id)}
              >
                <motion.div
                  className="relative flex flex-col items-center bg-opacity-10 p-4 overflow-hidden w-full h-full"
                  animate={{
                    scale: hoveredIndex === id ? 1.1 : 1,
                    transition: { duration: 1.5 },
                  }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

                  {/* Text Content */}
                  <div className="flex flex-col items-center justify-center h-full z-10">
                    <span className="text-3xl font-semibold text-white">Collection {id}</span>
                    <span className="text-xl text-white mt-1">{year}</span>
                    
                    <div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredIndex === id ? 1 : 0,
                        y: hoveredIndex === id ? 0 : 20,
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-sm text-center mt-4 max-w-xs text-white z-10 px-4"
                    >
                      {summary}
                    </div>
                  </div>

                  <div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === id ? 1 : 0,
                      height: hoveredIndex === id ? "auto" : 0,
                    }}
                    transition={{ duration: 1.0 }}
                    className="text-sm text-center mt-2 absolute bottom-4 text-gray-200 z-10"
                  >
                    Click to view all artworks
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
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

export default CollPage;
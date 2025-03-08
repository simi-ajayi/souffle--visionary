import React from "react";
import { motion } from "framer-motion";

const AboutArtist = () => {
  return (
    <motion.div
      className="bg-cover bg-center bg-no-repeat text-black min-h-screen flex flex-col items-center px-6 py-12"
      style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/project-39ce3.appspot.com/o/IMG_9667.JPG?alt=media&token=b7a1becd-7294-4554-af60-03c5c07c5b93')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
            <div className="text-3xl mt-[-20px] uppercase bg-white p-4 rounded-md font-bold mb-1">Meet the artist</div>

      {/* Artist Info Section */}
      <motion.div
        className="max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row p-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.img
          src="https://firebasestorage.googleapis.com/v0/b/project-39ce3.appspot.com/o/IMG_9667.JPG?alt=media&token=b7a1becd-7294-4554-af60-03c5c07c5b93"
          alt="Artist"
          className="w-[300px] h-[300px] mx-auto md:w-1/3 md:h-1/3 p-6 object-cover rounded-full"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.div
          className="flex-1 p-2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Artist Name</h2>
          <p className="text-gray-600 mt-3">
            A visionary artist, blending creativity with emotion to craft breathtaking works of art. Each piece tells a story, capturing moments of inspiration and passion.
          </p>
          <p className="text-gray-600 mt-3">
            A visionary artist, blending creativity with emotion to craft breathtaking works of art. Each piece tells a story, capturing moments of inspiration and passion.
          </p>
          <p className="text-gray-600 mt-3">
            A visionary artist, blending creativity with emotion to craft breathtaking works of art. Each piece tells a story, capturing moments of inspiration and passion.
          </p>
          <p className="text-gray-600 mt-3">
            A visionary artist, blending creativity with emotion to craft breathtaking works of art. Each piece tells a story, capturing moments of inspiration and passion.
          </p>
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="mt-12 bg-gray-900 text-white p-6 rounded-lg shadow-lg text-center w-full max-w-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <h3 className="text-2xl font-semibold">Get in Touch</h3>
        <p className="text-gray-200 mt-2">For collaborations, inquiries, or commissions, feel free to reach out.</p>
        <div className="mt-4">
          <p>Email: artist@email.com</p>
          <p>Instagram: @artist_handle</p>
          <p>Website: www.artistwebsite.com</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutArtist;

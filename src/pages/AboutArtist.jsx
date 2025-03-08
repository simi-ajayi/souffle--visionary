import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { scriptContent } from "../components/scriptContent";

const AboutArtist = () => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const chatRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (Array.isArray(scriptContent) && scriptContent.length > 0) {
      setIsScriptLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isScriptLoaded || scriptContent.length === 0) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < scriptContent.length) {
        if (scriptContent[currentIndex]) {
          setVisibleMessages((prev) => [...prev, scriptContent[currentIndex]]);
        }
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isScriptLoaded]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col md:flex-row">
      <motion.div
        className="w-full md:w-1/2 bg-white hidden text-black md:flex flex-col items-center px-6 py-6 overflow-y-auto"
        style={{ maxHeight: "100vh" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-3xl uppercase text-white bg-black p-4 font-bold mb-4">Meet the Artist</div>

        <motion.div
          className="max-w-lg bg-white shadow-xl border border-gray-300 rounded-lg overflow-hidden flex flex-col p-6 mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <motion.div
            className="w-48 h-48 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/project-39ce3.appspot.com/o/IMG_9667.JPG?alt=media&token=b7a1becd-7294-4554-af60-03c5c07c5b93"
              alt="Artist"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-black text-center">SOUFFLE</h2>
            <p className="text-gray-800 mt-3">A visionary artist blending creativity with emotion...</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="w-full md:w-1/2 bg-black text-white flex flex-col" style={{ height: "90vh" }}>
        <div className="bg-black text-white p-4 rounded-t-lg flex items-center space-x-4 shadow-md border-b border-gray-700">
          <img src="https://firebasestorage.googleapis.com/v0/b/project-39ce3.appspot.com/o/IMG_9667.JPG?alt=media&token=b7a1becd-7294-4554-af60-03c5c07c5b93" className="w-14 h-14 rounded-full  flex items-center justify-center text-xl font-bold text-black"/>
          <div>
            <h3 className="font-bold">SOUFFLÉ NOT SOULFUL</h3>
          </div>
        </div>

        <div ref={chatRef} className="flex-1 bg-black p-4 overflow-y-auto flex flex-col space-y-4">
          {isScriptLoaded && visibleMessages.length > 0 ? (
            visibleMessages.filter(message => message && message.speaker).map((message, index) => (
              <motion.div
                key={index}
                className={`flex ${message.speaker === "MOYIN" ? "justify-end" : "justify-start"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5 }}
              >
                <div
                  className={`max-w-xs sm:max-w-md rounded-lg p-3 ${
                    message.speaker === "MOYIN"
                      ? "bg-white text-black rounded-br-none"
                      : "bg-gray-800 text-white rounded-bl-none"
                  }`}
                >
                  <div className="font-bold text-xs opacity-75 mb-1">{message.speaker}</div>
                  <div>{message.text}</div>
                </div>
              </motion.div>
            ))
          ) : isScriptLoaded ? null : (
            <div className="text-center text-gray-500 p-4">Loading conversation...</div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutArtist;

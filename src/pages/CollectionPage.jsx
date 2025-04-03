import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import collectionsData from "./collectionsData";

const CollectionPage = () => {
  const { id } = useParams();
  const artworks = collectionsData[id] || [];
  const [currentIndexes, setCurrentIndexes] = useState(artworks.map(() => 0));
  const [selectedArt, setSelectedArt] = useState(null);
  const [popupIndex, setPopupIndex] = useState(0);
  const [purchasePopup, setPurchasePopup] = useState(null);

  const handleNext = (artIndex) => {
    setCurrentIndexes((prev) =>
      prev.map((current, idx) =>
        idx === artIndex ? (current + 1) % artworks[artIndex].images.length : current
      )
    );
  };

  const handlePrev = (artIndex) => {
    setCurrentIndexes((prev) =>
      prev.map((current, idx) =>
        idx === artIndex
          ? (current - 1 + artworks[artIndex].images.length) % artworks[artIndex].images.length
          : current
      )
    );
  };

  const handlePurchase = (image) => {
    setPurchasePopup(image);
  };

  const confirmPurchase = () => {
window.location.href = `mailto:ayantoyemoyinoluwa@gmail.com?subject=Interested%20in%20Artwork&body=I%20would%20like%20to%20purchase%20the%20artwork.%0A%0AI%20am%20also%20interested%20in%20a%20poem.`;
    setPurchasePopup(null);
  };

  const nextPopupImage = () => {
    setPopupIndex((prev) => (selectedArt ? (prev + 1) % selectedArt.length : 0));
  };

  const prevPopupImage = () => {
    setPopupIndex((prev) => (selectedArt ? (prev - 1 + selectedArt.length) % selectedArt.length : 0));
  };

  return (
    <motion.div className="bg-cover bg-center bg-no-repeat text-black min-h-screen flex flex-col items-center"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/project-39ce3.appspot.com/o/IMG_9667.JPG?alt=media&token=b1561823-deb9-4115-b511-4c95d0205d5f')",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-5xl w-full py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((art, artIndex) => (
          <motion.div key={artIndex} className="relative bg-white max-h-[400px] rounded-lg overflow-hidden shadow-lg">
            <AnimatePresence>
              <motion.img
                key={currentIndexes[artIndex]}
                src={art.images[currentIndexes[artIndex]]}
                alt={`Artwork ${artIndex}`}
                className="w-full max-h-[400px] cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setSelectedArt(art.images);
                  setPopupIndex(0);
                }}
              />
            </AnimatePresence>

            {art.images.length > 1 && (
              <>
                <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full" onClick={() => handlePrev(artIndex)}>
                  <FaArrowLeft />
                </button>
                <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full" onClick={() => handleNext(artIndex)}>
                  <FaArrowRight />
                </button>
              </>
            )}

            <button className="absolute flex gap-2 bottom-2 right-2 bg-black text-white px-3 py-1 rounded-lg" onClick={() => handlePurchase(art.images[currentIndexes[artIndex]])}>
              <ShoppingCart /> Purchase
            </button>
          </motion.div>
        ))}
      </div>
      
      {/* Lightbox Popup */}
      {selectedArt && (
        <div className="fixed inset-0 backdrop-blur-xs bg-black/30 flex items-center justify-center z-50">
          <div className="relative p-4 bg-white rounded-lg max-w-2xl w-full flex flex-col items-center">
            <button className="absolute top-2 right-2 text-black" onClick={() => setSelectedArt(null)}>
              <FaTimes size={24} />
            </button>
            <motion.img
              key={popupIndex}
              src={selectedArt[popupIndex]}
              alt="Selected Art"
              className="w-full max-h-[500px] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            {selectedArt.length > 1 && (
              <div className="flex justify-between w-full px-4">
                <button className="bg-gray-800 text-white p-2 rounded-full" onClick={prevPopupImage}>
                  <FaArrowLeft />
                </button>
                <button className="bg-gray-800 text-white p-2 rounded-full" onClick={nextPopupImage}>
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Purchase Confirmation Popup */}
      {purchasePopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xs bg-black/30">
          <div className="relative p-6 bg-white rounded-lg max-w-sm w-full text-center shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Purchase Instructions</h2>
            <p className="text-gray-700 mb-4">Please take a screenshot of the artwork you want to purchase and attach it to the email.</p>
            <div className="flex justify-center gap-4">
              <button className="text-black px-4 py-2 rounded" onClick={() => setPurchasePopup(null)}>Cancel</button>
              <button className="bg-black text-white px-4 py-2 rounded" onClick={confirmPurchase}>Continue</button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CollectionPage;
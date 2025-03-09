const collection1 = import.meta.glob("../assets/Collection1/*.(png|jpg|jpeg|svg)");
const collection2 = import.meta.glob("../assets/Collection2/*.(png|jpg|jpeg|svg)");
const collection3 = import.meta.glob("../assets/Collection3/*.(png|jpg|jpeg|svg)");
const collection4 = import.meta.glob("../assets/Collection4/*.(png|jpg|jpeg|svg)");

const loadImages = async (collection) => {
  const imagePaths = await Promise.all(
    Object.values(collection).map(async (img) => {
      const module = await img(); 
      return { images: [module.default] };
    })
  );
  return imagePaths;
};

const collectionsData = {};

(async () => {
  collectionsData[1] = await loadImages(collection1);
  collectionsData[2] = await loadImages(collection2);
  collectionsData[3] = await loadImages(collection3);
  collectionsData[4] = await loadImages(collection4);
})();

export default collectionsData;

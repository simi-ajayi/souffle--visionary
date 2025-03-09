const collection1 = import.meta.glob("../assets/Collection1/*.(png|jpg|jpeg|svg)", { eager: true });
const collection2 = import.meta.glob("../assets/Collection2/*.(png|jpg|jpeg|svg)", { eager: true });
const collection3 = import.meta.glob("../assets/Collection3/*.(png|jpg|jpeg|svg)", { eager: true });
const collection4 = import.meta.glob("../assets/Collection4/*.(png|jpg|jpeg|svg)", { eager: true });

const getImages = (collection) => Object.values(collection).map((img) => ({ images: [img.default] }));

const collectionsData = {
  1: getImages(collection1),
  2: getImages(collection2),
  3: getImages(collection3),
  4: getImages(collection4),
};

export default collectionsData;

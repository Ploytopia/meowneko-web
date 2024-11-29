// src/pages/View.js
import React, { useState } from 'react';

const View = ({ setBackgroundImage, setIsImageSelected }) => {
  const images = [
    { src: '/background/Photo1.jpg', alt: 'Photo 1' },
    { src: '/background/Photo2.jpg', alt: 'Photo 2' },
    { src: '/background/Photo3.jpg', alt: 'Photo 3' },
    { src: '/background/Photo4.jpg', alt: 'Photo 4' },
    { src: '/background/Photo5.jpg', alt: 'Photo 5' },
    { src: '/background/Photo6.jpg', alt: 'Photo 6' },
    { src: '/background/Photo7.jpg', alt: 'Photo 7' },
    { src: '/background/Photo8.jpg', alt: 'Photo 8' }
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].src);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setBackgroundImage(src);
    setIsImageSelected(true);
  };

  return (
    <div className="image-selector-container p-4 rounded-lg max-h-[400px] overflow-y-scroll fixed right-20 mr-10 top-1/2 transform -translate-y-1/2"style={{ zIndex: 1000 }}>
      {images.map((image, index) => (
        <div key={index} className="flex mb-4">
          <img
            src={image.src}
            alt={image.alt}
            className={`w-48 h-32 cursor-pointer rounded-md ${selectedImage === image.src ? 'border-4 border-white' : ''
            }`}
            onClick={() => handleImageClick(image.src)}
          />
        </div>
      ))}
    </div>
  );
};

export default View;

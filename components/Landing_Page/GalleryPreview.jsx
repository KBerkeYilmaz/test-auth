"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const GalleryPreview = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the image data from your API or database
    const fetchImages = async () => {
      const response = await fetch("/api/images"); // Adjust endpoint as necessary
      const data = await response.json();
      setImages(data); // Assuming 'data' is an array of image objects
    };

    fetchImages();
  }, []);

  return (
    <section className="min-h-fit w-screen">
      <div className="flex flex-col items-center w-full h-full px-[67px]">
        <div className="w-full flex items-center">
          <h1 className="text-4xl w-1/2">Tüm Galeriyi Görüntüle</h1>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full h-full m-10">
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="image-preview relative h-[344px] w-[411px] rounded-[32px] "
            >
              <Image
                src={image.image} // Adjust according to your data structure
                alt={image.altText || "Image preview"}
                objectFit="contain"
                layout="fill" // This makes the image scale nicely
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

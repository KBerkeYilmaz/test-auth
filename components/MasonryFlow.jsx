"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState, useEffect } from "react";

export default function MasonryImageList() {
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
    <Box
      sx={{
        width: "100vw",
        
        overflowY: "scroll",
        display: "flex", // Use Flexbox for layout
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Take full viewport height
      }}
      className={"w-screen"}
    >
      <ImageList
        variant="masonry"
        cols={3}
        gap={8}
      >
        {images.map((item, index) => (
          <ImageListItem key={item._id || index}>
            <img
              src={`${item.image}`}
              alt={item.title || "Exemple Image"} // Provide a fallback title if none is provided
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

"use client";

import { useState, useRef } from "react";
import AlertBar from "./AlertBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const UploadImage = () => {
  const [image, setImage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  function convertToBase64(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error ", error);
    };
  }

  const handleSubmit = async () => {
    setIsLoading(true); // Set loading to true
    try {
      const res = await fetch("/api/images/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image,
        }),
      });
      if (res.ok) {
        console.log("Image saved successfully");
        setIsSuccess(true);
        setImage(""); // Clear the image
      } else {
        console.error("Failed to save image");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const debouncedHandleSubmit = debounce(handleSubmit, 1000);

  return (
    <div className="w-2/5 h-1/2 flex flex-col justify-start items-start">
      {isSuccess && (
        <AlertBar
          message="Görüntü Başarıyla Yüklendi"
          severity="success"
        />
      )}
      {image && (
        <img
          src={image}
          width={100}
          height={100}
          className="w-full h-full bg-black"
        />
      )}
      <Stack
        direction="row"
        spacing={2}
        className="w-full"
      >
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={convertToBase64}
            ref={fileInputRef}
          />
          <Button
            variant="contained"
            component="span"
            color="primary"
            disabled={isLoading}
          >
            Resim Seç
          </Button>
        </label>
        <Stack
          direction="row"
          spacing={5}
        >
          <Button
            variant="contained"
            disabled={isLoading}
            color="error"
            onClick={() => setImage("")}
          >
            İptal Et
          </Button>
          <Button
            variant="contained"
            disabled={isLoading}
            color="primary"
            onClick={debouncedHandleSubmit}
          >
            {isLoading ? "Yükleniyor..." : "Yükle"}
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default UploadImage;

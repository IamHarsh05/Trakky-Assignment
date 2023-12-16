import React from "react";
import { useSelector } from "react-redux";
import AllUserImage from "./allUser";

export default function Main() {
  const allImages = useSelector((state) => state.images.allImages);
  console.log(allImages);

  const images = JSON.parse(localStorage.getItem("images")) || [];
  return (
    <>
      {allImages ? (
        <AllUserImage />
      ) : (
        <div className="flex flex-row px-4 py-10 bg-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="flex justify-center overflow-hidden">
                <img
                  className="h-48 md:h-80 max-w-full transition-all duration-300 rounded-lg cursor-pointer md:filter md:grayscale hover:grayscale-0"
                  src={image}
                  alt={`pic ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

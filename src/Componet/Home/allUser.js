import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function AllUserImage() {
  const images = JSON.parse(localStorage.getItem("images")) || [];
  return (
    <div className="flex flex-row px-4 py-10 bg-slate-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div className="group relative">
            <div
              key={index}
              className="flex justify-center rounded-lg overflow-hidden"
            >
              <img
                className="image blur h-80 max-w-full transition-all duration-300 cursor-pointer pointer-events-none"
                src={image}
                alt={`pic ${index + 1}`}
              />
            </div>
            <div className="hidden flex flex-col absolute inset-1/2 group-hover:block cursor-pointer">
              <button className=""><ShoppingBagIcon className="h-10 w-10"/> </button>
              <p>Buy Now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function AllUserImage() {
  const images = JSON.parse(localStorage.getItem("images")) || [];
  return (
    <div className="flex flex-row px-4 py-10 bg-slate-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div className="group grid grid-cols-1 place-items-center relative" key={`pic ${index + 1}`}>
            <div className="hidden flex flex-col absolute place-items-center group-hover:block cursor-pointer z-40">
              <button className=""><ShoppingBagIcon className="h-10 w-10"/> </button>
              <Link to={`https://rzp.io/l/IZZTr7J7xq`} target="_blank"><p>Buy Now</p></Link>
            </div>
            <div
              key={index}
              className="flex justify-center rounded-lg overflow-hidden"
            >
              <img
                className="image blur h-48 md:h-80 max-w-full transition-all duration-300 cursor-pointer pointer-events-none z-10"
                src={image}
                alt={`pic ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

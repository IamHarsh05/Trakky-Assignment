import React from "react";

export default function Main() {
  const images = JSON.parse(localStorage.getItem("images")) || [];
  return (
    <div className="flex flex-row px-4 py-10 bg-slate-200">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} class="overflow-hidden">
            <img
              class="h-auto max-w-full transition-all duration-300 rounded-lg cursor-pointer md:filter md:grayscale hover:grayscale-0"
              src={image}
              alt={`pic ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

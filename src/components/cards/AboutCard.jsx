import React from "react";

function AboutCard({ image, name, role, desc }) {
  return (
    <div className="w-[250px] group overflow-hidden relative bg-gradient-to-br from-white via-green-50 to-yellow-50 border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 ease-in-out">
      <div className="w-28 h-28 mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="rounded-full object-cover w-full h-full ring-4 ring-green-400"
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm font-semibold text-green-700 mb-3">{role}</p>

      <p
        className="flex absolute top-0 inset-0 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:scale-100  scale-50 group-hover:scale-100 transition-all duration-300 items-center justify-center bg-gradient-to-b from-green-700/80 via-green-800/90 to-gray-950
 backdrop-blur-[3px] mx-auto px-5 text-white text-md leading-relaxed rounded-2xl"
      >
        {desc}
      </p>
    </div>
  );
}

export default AboutCard;

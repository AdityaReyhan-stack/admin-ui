import React, { useState } from "react";

const UserCard = ({ title, body }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="flex flex-col p-6 rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 transform 
      hover:scale-105 hover:bg-red-50 hover:border-special-red2"
    >
      <h2 className="text-sm font-bold text-gray-800 mb-2 text-center min-h-[40px] capitalize">
        {title}
      </h2>

      <p className="text-xs text-gray-600 mb-6 text-center flex-grow line-clamp-3">
        {body}
      </p>

      <div className="flex justify-center">
        <button
          onClick={() => setClicked(true)}
          className={`w-full p-2 rounded-md font-semibold text-white transition-colors
            ${clicked ? "bg-special-red2" : "bg-gray-500 hover:bg-gray-600"}`}
        >
          {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;

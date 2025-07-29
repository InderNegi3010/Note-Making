import React from "react";

const Header = ({ onSignOut }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 p-3 sm:p-4 flex items-center justify-between">
      <div>
        <h1 className="text-gray-800 text-lg sm:text-xl font-bold">
          📝 Note Making App
        </h1>
      </div>

      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
        onClick={onSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;

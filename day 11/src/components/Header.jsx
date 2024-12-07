import React from "react";

const Header = ({ title }) => {
  return (
    <header className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-500 text-sm mt-2">
        Select and hover over dates to view details.
      </p>
    </header>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Dynamic Dashboard Builder
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your widgets and categories
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

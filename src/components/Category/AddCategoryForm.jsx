import React, { useState } from "react";
import { validateCategoryName } from "../../utils/helpers";

const AddCategoryForm = ({ onAddCategory, onCancel }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = () => {
    if (validateCategoryName(categoryName)) {
      onAddCategory(categoryName);
      setCategoryName("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-3">Add New Category</h3>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Add
        </button>
        <button
          onClick={() => {
            onCancel();
            setCategoryName("");
          }}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddCategoryForm;

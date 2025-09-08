import React from "react";
import { Trash2 } from "lucide-react";

const CategoryHeader = ({ category, onRemoveCategory }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
      <button
        onClick={() => onRemoveCategory(category.id)}
        className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
        title="Remove Category"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CategoryHeader;

import React from "react";
import { X } from "lucide-react";

const Widget = ({ widget, onRemove }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 relative group">
      <button
        onClick={() => onRemove(widget.id)}
        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
        title="Remove Widget"
      >
        <X className="w-4 h-4" />
      </button>
      <h3 className="font-medium text-gray-900 mb-2 pr-6">{widget.name}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{widget.text}</p>
    </div>
  );
};

export default Widget;

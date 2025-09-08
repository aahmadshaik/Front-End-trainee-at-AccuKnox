import React, { useState } from "react";
import { Plus } from "lucide-react";
import { validateWidget } from "../../utils/helpers";

const AddWidgetCard = ({ onAddWidget }) => {
  const [showForm, setShowForm] = useState(false);
  const [widget, setWidget] = useState({ name: "", text: "" });

  const handleAdd = () => {
    if (validateWidget(widget)) {
      onAddWidget(widget);
      setWidget({ name: "", text: "" });
      setShowForm(false);
    }
  };

  const handleCancel = () => {
    setWidget({ name: "", text: "" });
    setShowForm(false);
  };

  return (
    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center min-h-[120px]">
      {showForm ? (
        <div className="w-full">
          <input
            type="text"
            placeholder="Widget name"
            value={widget.name}
            onChange={(e) => setWidget({ ...widget, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            placeholder="Widget text content"
            value={widget.text}
            onChange={(e) => setWidget({ ...widget, text: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded mb-3 h-16 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="flex-1 px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 px-3 py-2 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Widget
        </button>
      )}
    </div>
  );
};

export default AddWidgetCard;

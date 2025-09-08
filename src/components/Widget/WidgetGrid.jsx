import React from "react";
import Widget from "./Widget";
import AddWidgetCard from "./AddWidgetCard";

const WidgetGrid = ({ widgets, categoryId, onAddWidget, onRemoveWidget }) => {
  const handleAddWidget = (widget) => {
    onAddWidget(categoryId, widget);
  };

  const handleRemoveWidget = (widgetId) => {
    onRemoveWidget(categoryId, widgetId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      {widgets.map((widget) => (
        <Widget key={widget.id} widget={widget} onRemove={handleRemoveWidget} />
      ))}
      <AddWidgetCard onAddWidget={handleAddWidget} />
    </div>
  );
};

export default WidgetGrid;

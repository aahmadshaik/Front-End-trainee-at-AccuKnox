import React from "react";
import CategoryHeader from "./CategoryHeader";
import WidgetGrid from "../Widget/WidgetGrid";

const Category = ({
  category,
  onAddWidget,
  onRemoveWidget,
  onRemoveCategory,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <CategoryHeader category={category} onRemoveCategory={onRemoveCategory} />
      <WidgetGrid
        widgets={category.widgets}
        categoryId={category.id}
        onAddWidget={onAddWidget}
        onRemoveWidget={onRemoveWidget}
      />
    </div>
  );
};

export default Category;

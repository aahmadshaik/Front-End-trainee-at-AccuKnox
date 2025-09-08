export const filterWidgets = (categories, searchTerm) => {
  if (!searchTerm) return categories;

  return categories
    .map((category) => ({
      ...category,
      widgets: category.widgets.filter(
        (widget) =>
          widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          widget.text.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.widgets.length > 0);
};

export const validateWidget = (widget) => {
  return widget.name.trim() && widget.text.trim();
};

export const validateCategoryName = (name) => {
  return name.trim().length > 0;
};

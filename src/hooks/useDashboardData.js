import { useLocalStorage } from "./useLocalStorage";
import { initialData } from "../data/initialData";

export const useDashboardData = () => {
  const [data, setData] = useLocalStorage("dashboardData", initialData);

  const addWidget = (categoryId, widget) => {
    const newWidget = {
      id: `widget-${Date.now()}`,
      name: widget.name.trim(),
      text: widget.text.trim(),
    };

    setData((prevData) => ({
      ...prevData,
      categories: prevData.categories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, newWidget] }
          : category
      ),
    }));
  };

  const removeWidget = (categoryId, widgetId) => {
    setData((prevData) => ({
      ...prevData,
      categories: prevData.categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter((w) => w.id !== widgetId),
            }
          : category
      ),
    }));
  };

  const addCategory = (name) => {
    const newCategory = {
      id: `category-${Date.now()}`,
      name: name.trim(),
      widgets: [],
    };

    setData((prevData) => ({
      ...prevData,
      categories: [...prevData.categories, newCategory],
    }));
  };

  const removeCategory = (categoryId) => {
    setData((prevData) => ({
      ...prevData,
      categories: prevData.categories.filter((c) => c.id !== categoryId),
    }));
  };

  return {
    data,
    addWidget,
    removeWidget,
    addCategory,
    removeCategory,
  };
};

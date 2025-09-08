import React, { useState } from "react";
import { FolderPlus } from "lucide-react";
import Header from "../Layout/Header";
import SearchBar from "../Search/SearchBar";
import AddCategoryForm from "../Category/AddCategoryForm";
import Category from "../Category/Category";
import { useDashboardData } from "../../hooks/useDashboardData";
import { filterWidgets } from "../../utils/helpers";

const Dashboard = () => {
  const { data, addWidget, removeWidget, addCategory, removeCategory } =
    useDashboardData();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);

  const filteredCategories = filterWidgets(data.categories, searchTerm);

  const handleAddCategory = (name) => {
    addCategory(name);
    setShowAddCategory(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search and Add Category Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <button
            onClick={() => setShowAddCategory(true)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
          >
            <FolderPlus className="w-4 h-4" />
            Add Category
          </button>
        </div>

        {/* Add Category Form */}
        {showAddCategory && (
          <AddCategoryForm
            onAddCategory={handleAddCategory}
            onCancel={() => setShowAddCategory(false)}
          />
        )}

        {/* Categories */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {searchTerm
                  ? "No widgets found matching your search."
                  : "No categories found."}
              </p>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <Category
                key={category.id}
                category={category}
                onAddWidget={addWidget}
                onRemoveWidget={removeWidget}
                onRemoveCategory={removeCategory}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

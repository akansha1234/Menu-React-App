import React from "react";
const Category = ({ category, filterCategory }) => {
  return (
    <div className="btn-container">
      {category.map((item, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterCategory(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Category;

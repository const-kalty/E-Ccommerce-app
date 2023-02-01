import React from 'react'
import {useContext} from "react";
import {CategoriesContext} from "../../../context/CategoriesContext";
import CategoryPreview from "../../category-preview/CategoryPreviewComponent";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
      <div className="categories-preview-container">
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
      </div>
    );
}

export default CategoriesPreview
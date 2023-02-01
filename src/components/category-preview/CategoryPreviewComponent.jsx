import React from "react";
import ProductCard from "../product-card/ProductCardComponent";
import "./categoryPreview.styles.jsx";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  Preview,
} from "./categoryPreview.styles.jsx";

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title}>
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

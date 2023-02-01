import React from "react";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import "./productCard.styles.jsx";

import {
  AddButton,
  ProductCardContainer,
  ProductCardContainerImg,
  ProductCardFooter,
  ProductCardNameSpan,
  ProductCardPriceSpan,
} from "./productCard.styles.jsx";

const ProductCard = ({product}) => {
  const {addItemToCart} = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };
  const {name, price, imageUrl} = product;
  return (
    <ProductCardContainer>
      <ProductCardContainerImg src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardNameSpan>{name}</ProductCardNameSpan>
        <ProductCardPriceSpan>{`$${price}`}</ProductCardPriceSpan>
      </ProductCardFooter>
      <AddButton inverted onClick={addProductToCart}>
        Add to Cart
      </AddButton>
    </ProductCardContainer>
  );
};

export default ProductCard;

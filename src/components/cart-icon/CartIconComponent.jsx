import React from "react";
import "./cartIcon.styles.jsx";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cartIcon.styles.jsx";

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen,cartCount} = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
    <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

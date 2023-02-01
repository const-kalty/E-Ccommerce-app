import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./checkoutItem.styles.jsx";
import { Arrow, CheckoutItemContainer, CheckoutItemImg, CheckoutItemSpan, ImageContainer, Quantity, RemoveButton } from "./checkoutItem.styles.jsx";

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  const {clearItemFromCart, addItemToCart, removeItemFromCart} =
    useContext(CartContext);
  const clearItemHandler = ()=>clearItemFromCart(cartItem);
  const addItemHandler = ()=>addItemToCart(cartItem);
  const removeItemHandler = ()=>removeItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImg src={imageUrl} alt={name} />
      </ImageContainer>
      <CheckoutItemSpan>{name}</CheckoutItemSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <CheckoutItemSpan>{quantity}</CheckoutItemSpan>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <CheckoutItemSpan>{price}</CheckoutItemSpan>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

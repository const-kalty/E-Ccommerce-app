import React, {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import CheckoutItem from "../checkout-item/CheckoutItemComponent";
import "./checkout.styles.jsx";
import { CheckoutContainer, CheckoutHeader, CheckoutTotal, HeaderBlock } from "./checkout.styles.jsx";

const Checkout = () => {
  const {cartItems,cartTotal} =
    useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutTotal>Total:${cartTotal}</CheckoutTotal>
    </CheckoutContainer>
  );
};
export default Checkout;

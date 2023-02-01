import React from "react";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import Button from "../button/ButtonComponent";
import CartItem from "../cart-item/CartItemComponent";
import "./cartDropdown.styles.jsx";
import {
  CartItems,
  CartDropdownContainer,
  EmptyMessage,
} from "./cartDropdown.styles.jsx";

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

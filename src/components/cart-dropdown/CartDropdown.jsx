import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./cartDropdown.styles.scss";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckOutHandler = ()=>{
        navigate("/checkout")
    }
  return (
    <div className="cart-dropdown-container">
      <div className="card-items">
       {cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)) :(
        <span className="empty-message">Your cart is empty</span>
       )}
      </div>
      <Button onClick={goToCheckOutHandler} >GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

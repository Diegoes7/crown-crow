import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart-selectors.js";
import { toggleCartHidden } from "../../redux/cart/cart-actons.js";
import { withRouter } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItemsContainder,
  CartDropdownButton,
  EmptyMessageContainder,
} from "./cart-dropdown.styles.jsx";

import "./cart-dropdown.styles.jsx";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainder>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainder>Your cart is empty</EmptyMessageContainder>
      )}
    </CartItemsContainder>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

import React from "react";

import {
  CartItemsContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./cart-item.styles.jsx";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemsContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemsContainer>
);

export default CartItem;

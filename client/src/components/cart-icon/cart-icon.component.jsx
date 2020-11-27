import React from "react";
import { connect } from "react-redux";
import  { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from "../../redux/cart/cart-actons";
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'

import {CartIconContainder, ShoppingIcon, ItemCountContainer} from  "./cart-icon.styles.jsx";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainder  onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainder>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

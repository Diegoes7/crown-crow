import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_2oJzefdrHjSiYhYug2ag5czv00ODoswJJF";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment was successful!");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert("There is un issue with your payment!");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN-CROW IMPIRE"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      discription={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const KEY =
  "pk_test_51M517HHKw6WPsN13tko0x3fnc6tuBSknyqiPmZ2T1jGdGHYrs1wbw3lDxW4aO8CHwbmsCdIp3u0Eej3yYmmxx4S3001bSAynU3";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          { tokenId: stripeToken.id, amount: 2000 }
        );
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div>
      <StripeCheckout
        name="ARM shop"
        image="https://cryptologos.cc/logos/aave-aave-logo.png"
        billingAddress
        shippingAddress
        description="Your total is 20$"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button >Pay</button>
      </StripeCheckout>
    </div>
  );
};
export default Pay;

import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

function CartTotal({ cartItems }) {
  const buttonClick = () => {
    alert("Not enough funds to make this purchase !!!");
  };

  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });

    return count;
  };
  const getPrice = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.price * item.product.quantity;
    });

    return count;
  };
  return (
    <Container>
      <PriceInfoContainer>
        <h3>Subtotal ({getCount()} items) :</h3>
        <h3>
          <NumberFormat
            value={getPrice()}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs."}
          />
        </h3>
      </PriceInfoContainer>
      <CheckoutButtonContainer onClick={buttonClick}>
        Proceed to Checkout
      </CheckoutButtonContainer>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  flex: 0.2;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    margin-right: 10px;
  }
  border-radius: 10px;
  box-shadow: 0 5px 15px grey;
`;

const PriceInfoContainer = styled.div`
  display: flex;
  h3 {
    margin-right: 10px;
  }
`;

const CheckoutButtonContainer = styled.button`
  margin-top: 30px;
  padding: 12px;
  background-color: #f0c14b;
  border: none;
  border-radius: 5px;
  :focus {
    outline: none;
  }
  :hover {
    border: none;
    cursor: pointer;
    background: #ddb347;
    box-shadow: 8px 8px 10px #f90;
  }
`;

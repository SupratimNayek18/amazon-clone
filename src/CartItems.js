import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

function CartItems({ cartItems }) {
  return (
    <Container>
      <Title>
        <h1>Shopping Cart</h1>
      </Title>
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default CartItems;

const Container = styled.div`
  flex: 0.8;
  margin-right: 18px;
  padding: 0 20px 20px;
  border-radius: 10px;
`;

const Title = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 2px 10px grey;
`;

const ItemsContainer = styled.div``;

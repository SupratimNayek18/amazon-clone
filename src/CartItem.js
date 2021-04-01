import React from "react";
import styled from "styled-components";
import { db } from "./firebase";

function CartItem({ id, item }) {
  let options = [];

  for (let i = 1; i < Math.max(item.quantity + 1, 21); i++) {
    options.push(<option value={i}>Qty:{i}</option>);
  }
  const changeQuantity = (newQuantity) => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.update({ quantity: Number(newQuantity) });
  };

  const deleteItem = () => {
    db.collection("cartItems").doc(id).delete();
  };

  return (
    <Container>
      <ImageContainer>
        <img src={item.image} alt="cart-img" />
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
          <h2>{item.name}</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>
            <select
              value={item.quantity}
              onChange={(e) => changeQuantity(e.target.value)}
            >
              {options}
            </select>
          </CartItemQuantityContainer>
          <CartItemDeleteContainer onClick={deleteItem}>
            Delete
          </CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>Rs.{item.price}</CartItemPrice>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  background-color: white;
  padding: 15px;
  display: flex;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px grey;
`;

const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
  :hover {
    transform: scale(1.5);
    transition: transform 0.5s;
  }
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
`;

const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;

const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`;

const CartItemQuantityContainer = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    :focus {
      outline: none;
    }
    :hover {
      background: #bbbbbb;
      box-shadow: 3px 3px 3px grey;
    }
  }
`;

const CartItemDeleteContainer = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;

const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 17px;
`;

import React from "react";
import styled from "styled-components";
import { db } from "./firebase";

function Product({ title, price, rating, image, id }) {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Price>Rs.{price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => (
            <p>⭐</p>
          ))}
      </Rating>
      <Image src={image} />
      <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 1;
  max-height: 400px;
  flex: 1;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 15px 15px 10px grey;
`;

const Title = styled.span``;

const Price = styled.span`
  font-weight: 500;
  margin-top: 8px;
`;

const Rating = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
  :hover {
    transform: scale(1.5);
    transition: transform 0.5s;
  }
`;

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 1px solid;
  border-radius: 5px;
  margin: 12px auto;
  :focus {
    outline: none;
  }
  :hover {
    border: none;
    box-shadow: 0 0 0 3px #f90;
  }
`;

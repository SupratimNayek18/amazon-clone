import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <h2>Amazon Clone Website</h2>
      <p>Made with ❤️ by Supratim</p>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background-color: #0f1111;
  color: white;
  margin-top: 30px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 10px auto;
  }
`;

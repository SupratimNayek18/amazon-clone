import React from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;

        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Container>
      <Content>
        <AmazonLogo src="https://www.pinclipart.com/picdir/big/112-1129781_vampire-words-amazon-marketing-services-logo-png-clipart.png" />
        <h1>Sign in to Amazon</h1>
        <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  padding: 80px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px grey;
  text-align: center;
`;

const AmazonLogo = styled.img`
  height: 100px;
  margin-bottom: 40px;
`;

const LoginButton = styled.button`
  margin-top: 50px;
  padding: 10px 30px;
  background-color: #f0c14b;
  border: none;
  border-radius: 5px;
  :focus {
    outline: none;
  }
  :hover {
    background: #ddb347;
  }
  cursor: pointer;
`;

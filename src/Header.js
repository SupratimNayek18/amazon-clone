import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

function Header({ cartItems, user, signOut }) {
  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });

    return count;
  };

  return (
    <div>
      <Container>
        {/* amazon logo */}
        <HeaderLogo>
          <Link to="/">
            <img
              src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
              alt=""
            />
          </Link>
        </HeaderLogo>

        {/* greetings and address section */}
        <HeaderOptionAddress>
          <LocationOnIcon />
          <HeaderOption>
            <OptionLineOne>Hello</OptionLineOne>
            <OptionLineTwo>Select Your Address</OptionLineTwo>
          </HeaderOption>
        </HeaderOptionAddress>

        {/* Search bar and icon */}
        <HeaderSearch>
          <HeaderSearchInput type="text" />
          <HeaderSearchIconContainer>
            <SearchIcon />
          </HeaderSearchIconContainer>
        </HeaderSearch>

        {/* orders returns account and cart info */}
        <HeaderNavItems>
          <HeaderOption onClick={signOut}>
            <OptionLineOne>Hello,{user.name}</OptionLineOne>
            <OptionLineTwo>Account and Lists</OptionLineTwo>
          </HeaderOption>
          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>
          {/* making cart icon a link to cart page */}

          <HeaderOptionCart>
            <Link to="/cart">
              <ShoppingCartIcon />
              <CartCount>{getCount()}</CartCount>
            </Link>
          </HeaderOptionCart>
        </HeaderNavItems>
      </Container>
    </div>
  );
}

export default Header;

// css applied to header section

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow: 0 10px 10px grey;
`;

const HeaderLogo = styled.div`
  display: flex;
  img {
    display: flex;
    align-items: center;
    width: 100px;
    margin-left: 11px;
  }
`;

const HeaderOptionAddress = styled.div`
  padding: 10px 9px 10px 9px;
  display: flex;
  align-items: center;
`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  margin-right: 10px;
  border-radius: 7px;
  overflow: hidden;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 40px;
  color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderNavItems = styled.div`
  display: flex;
`;

const HeaderOption = styled.div`
  cursor: pointer;
  padding: 10px 9px 10px 9px;
`;

const HeaderOptionCart = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
  }
`;

const CartCount = styled.div`
  margin: 0px 5px 0px 5px;
  font-weight: 700;
  color: #f08804;
`;

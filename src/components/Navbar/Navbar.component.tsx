import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { SelectCartItems } from "../../redux/reducers/cart/cartselectors";

export const NavBar = () => {
  const CartItems = useSelector(SelectCartItems);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(
      CartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    );
  }, [CartItems]);

  return (
    <>
      <NavDiv>
        <NavLink to="/">
          <h2>BUY-MONSTERS</h2>
        </NavLink>
        <NavMenu>
          <li>Cart : {cartCount}</li>

          <NavLink to="/checkout">
            <NavCheckout>Go to Checkout </NavCheckout>
          </NavLink>
        </NavMenu>
      </NavDiv>
      <Outlet />
    </>
  );
};

const NavDiv = styled.div`
  background-color: purple;
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  z-index: 10;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
  align-items: center;
  color: white;
`;

const NavCheckout = styled.li`
  background-color: #b63199;
  padding: 8px;
  border-radius: 9px;

  &:hover {
    background-color: #be0c97;
  }
`;

import { useSelector } from "react-redux";
import styled from "styled-components";
import { CheckoutItem } from "../../components/CheckoutItem/checkout.component";
import { SelectCartItems } from "../../redux/reducers/cart/cartselectors";

export const Checkout = () => {
  const CartItems = useSelector(SelectCartItems);

  return (
    <>
      <CheckoutItem />
    </>
  );
};

const CheckoutList = styled.ul`
  list-style: none;
  font-size: 2rem;
`;

const CheckoutContainer = styled.div`
  margin-top: 100px;
`;

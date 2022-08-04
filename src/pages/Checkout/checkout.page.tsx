import { useSelector } from "react-redux";
import styled from "styled-components";
import { CheckoutItem } from "../../components/CheckoutItem/checkout.component";
import { SelectCartItems } from "../../redux/reducers/cart/cartselectors";

export const Checkout = () => {
  const CartItems = useSelector(SelectCartItems);

  return (
    <>
      <CheckoutContainer>
        {Object.keys(CartItems).length !== 0 ? (
          <CheckoutList>
            {Object.values(CartItems).map((value) => (
              <li>
                {value.name}------ x{value.quantity}
              </li>
            ))}
          </CheckoutList>
        ) : (
          <CheckoutList>
            <li>Your cart is empty</li>
          </CheckoutList>
        )}
      </CheckoutContainer>
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

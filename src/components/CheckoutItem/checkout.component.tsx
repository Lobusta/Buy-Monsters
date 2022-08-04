import { useSelector } from "react-redux";
import styled from "styled-components";
import { SelectCartItems } from "../../redux/reducers/cart/cartselectors";

export const CheckoutItem = () => {
  const CartItems = useSelector(SelectCartItems);

  return (
    <>
      {/* <CheckoutContainer>
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
 */}
      {Object.values(CartItems).map((value) => (
        <Maindiv>
          <Leftdiv>
            <img
              alt="Monsters"
              src={`https://robohash.org/${value.id}?set=set2&size=80x80`}
            />
            <div>
              <h2>{value.name}</h2>
            </div>
          </Leftdiv>
          <Rightdiv>
            <h1>x{value.quantity}</h1>
          </Rightdiv>
        </Maindiv>
      ))}
    </>
  );
};

const Maindiv = styled.div`
  background-color: white;
  margin-left: 100px;
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const Leftdiv = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Rightdiv = styled.div`
  display: flex;
  align-items: center;
`;

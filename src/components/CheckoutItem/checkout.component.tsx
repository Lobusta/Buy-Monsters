import { useSelector } from "react-redux";
import styled from "styled-components";
import { SelectCartItems } from "../../redux/reducers/cart/cartselectors";

export const CheckoutItem = () => {
  const CartItems = useSelector(SelectCartItems);

  return (
    <>
      {Object.keys(CartItems).length !== 0 ? (
        <Maindiv>
          {Object.values(CartItems).map((value) => (
            <Innerdiv>
              <Leftdiv>
                <Imgdiv>
                  <img
                    alt="Monsters"
                    src={`https://robohash.org/${value.id}?set=set2&size=80x80`}
                  />
                </Imgdiv>
                <div>
                  <h2>{value.name}</h2>
                </div>
              </Leftdiv>
              <Rightdiv>
                <h1>x{value.quantity}</h1>
              </Rightdiv>
            </Innerdiv>
          ))}
        </Maindiv>
      ) : (
        <Maindiv>
          <h1>Your cart is empty</h1>
        </Maindiv>
      )}
    </>
  );
};

const Maindiv = styled.div`
  margin: 100px auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 24px;
  justify-content: flex-start;
`;

const Innerdiv = styled.div`
  margin: 0px auto;
  padding: 12px;
  background-color: #cfcfcf;
  gap: 12px;
  width: 700px;
  display: flex;
  border-bottom: 3px solid black;
  justify-content: space-between;
`;

const Leftdiv = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Rightdiv = styled.div`
  margin-right: 24px;
  display: flex;
  align-items: center;
`;

const Imgdiv = styled.div`
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid purple;
`;

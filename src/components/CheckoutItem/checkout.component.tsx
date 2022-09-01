import { useSelector } from "react-redux";
import styled from "styled-components";
import { SelectCartItems } from "../../redux/reducers/cart/cartselectors";
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  DecreaseItem,
  IncreaseItem,
} from "../../redux/reducers/cart/cartactions";

export const CheckoutItem = () => {
  const CartItems = useSelector(SelectCartItems);

  const dispatch = useDispatch();

  const RemoveItemFromCart = (producttoRemoveId: number) => {
    dispatch(clearItemFromCart(CartItems, producttoRemoveId));
  };

  const DecreaseItemFromCart = (producttoDecreaseId: number) => {
    dispatch(DecreaseItem(CartItems, producttoDecreaseId));
  };

  const IncreaseItemFromCart = (producttoIncreaseId: number) => {
    dispatch(IncreaseItem(CartItems, producttoIncreaseId));
  };

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
                    src={`https://robohash.org/${value.id}?set=set2&size=70x70`}
                  />
                </Imgdiv>
                <div>
                  <h2>{value.name}</h2>
                </div>
              </Leftdiv>
              <Rightdiv>
                <Quandiv>
                  <Icondiv
                    onClick={() => {
                      DecreaseItemFromCart(value.id);
                    }}
                  >
                    &#60;
                  </Icondiv>
                  <h2>x{value.quantity}</h2>
                  <Icondiv
                    onClick={() => {
                      IncreaseItemFromCart(value.id);
                    }}
                  >
                    &#62;
                  </Icondiv>
                </Quandiv>
                <ClearBtn
                  onClick={() => {
                    RemoveItemFromCart(value.id);
                  }}
                >
                  {" "}
                  <div>&#10005;</div>
                </ClearBtn>
              </Rightdiv>
            </Innerdiv>
          ))}
        </Maindiv>
      ) : (
        <Maindiv>
          <h2>Your cart is empty</h2>
        </Maindiv>
      )}
    </>
  );
};

const Maindiv = styled.div`
  border-radius: 9px;
  margin: 100px auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 24px;
  justify-content: flex-start;
`;

const Innerdiv = styled.div`
  padding: 8px;
  gap: 4px;
  width: 700px;
  height: 60px;
  display: flex;
  border-bottom: 1px solid black;
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
  gap: 48px;
`;

const Imgdiv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const ClearBtn = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Quandiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Icondiv = styled.div`
  transform: scale(1.6);
  cursor: pointer;
  z-index: 1;
`;

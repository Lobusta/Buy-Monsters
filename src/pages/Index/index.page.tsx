import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CartItemType } from "../../redux/reducers/cart/cartactions";
import styled from "styled-components";
import { ProductCard } from "../../components/ProductCard/ProductCard.component";
import { useEffect } from "react";

import { getShop } from "../../redux/sagas/shop/shopactions";
import { addItemToCart } from "../../redux/reducers/cart/cartactions";
import { ShopSelector } from "../../redux/sagas/shop/shopselector";
export const Index = () => {
  const dispatch = useDispatch();

  const ShopList = useSelector(ShopSelector);

  useEffect(() => {
    dispatch(getShop());
  }, [dispatch]);

  const CartItems = useSelector<RootState, CartItemType[]>(
    (state) => state.Cart.cartItem
  );

  const addCart = (item: CartItemType) => {
    dispatch(addItemToCart(CartItems, item));
  };

  return (
    <>
      <BigBox>
        {ShopList &&
          Object.values(ShopList).map((value) => (
            <>
              {
                <Card>
                  <ProductCard
                    id={value.id}
                    title={value.name}
                    email={value.email}
                  />
                  <ATCbtn onClick={() => addCart(value)}>Add to cart</ATCbtn>
                </Card>
              }
            </>
          ))}
      </BigBox>
    </>
  );
};

const BigBox = styled.div`
  background-color: rgb(248, 106, 255);
  padding: 48px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 48px;
`;

const Card = styled.div`
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background-color: #fff;
`;

const ATCbtn = styled.button`
  width: 200px;
  padding: 12px;
  border-radius: 9px;
  border: none;
  margin-bottom: 12px;
  background-color: #b7b7b7;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

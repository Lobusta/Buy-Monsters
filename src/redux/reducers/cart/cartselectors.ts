import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";




const CartReducer = (state:RootState)=> state.Cart;

export const SelectCartItems = createSelector(
    [CartReducer] , 
    (cart) => cart.cartItem
)
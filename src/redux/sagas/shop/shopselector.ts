import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";


const Shopreducer = (state:RootState) => state.Shop;



export const ShopSelector = createSelector(
    [Shopreducer],
    (shop) => shop.shopItems
)
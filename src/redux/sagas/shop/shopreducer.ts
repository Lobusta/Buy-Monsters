


import { AnyAction } from "redux";
import { SHOP_ACTIONS } from "./shopactions";



export interface IShopType {
    shopItems: Object
}


const initialState = {
    shopItems: {}
}


export const shopReducer = (state = initialState, action:AnyAction):IShopType =>{

    switch(action.type){
        case SHOP_ACTIONS.SET_SHOP:
            const {shopItems} = action;
            return{...state ,shopItems: shopItems }
        default:
            return state;

    }

}


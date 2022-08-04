import { AnyAction } from "redux"
import { CartItemType, CART_ACTIONS } from "./cartactions"







interface IcartType  {
    cartItem: CartItemType[]
}

const InitialState = { 
    cartItem: []
}





export const cartReducer = (state:IcartType=InitialState, action:AnyAction):IcartType => {


   

    switch(action.type){
        case CART_ACTIONS.ADD_TO_CART:
            return {
                ...state, 
                cartItem: action.payload
            
        
                }
        default:
            return state;
    }

}


import { cartReducer } from "./reducers/cart/cartreducer"
import { shopReducer } from "./sagas/shop/shopreducer"



export const rootReducer = ({
    Shop: shopReducer,
    Cart: cartReducer

})


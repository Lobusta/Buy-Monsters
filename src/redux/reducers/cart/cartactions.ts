
export const CART_ACTIONS = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART"
}




export type CartItemType = {
    id: number;
    name: string;
    quantity: number
  };



  const addCartItem = (cartItems:CartItemType[], productToAdd:CartItemType) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

export const addItemToCart = (cartItems: CartItemType[], productToAdd:CartItemType) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return addtoCart(CART_ACTIONS.ADD_TO_CART, newCartItems);
};



const addtoCart = (type:string, cart:CartItemType[]) => {
    return {
        type: type,
        payload:cart
    }
}



// export const addtoCart = (cartItemtoAdd:String) => {
    
//     return {
//      type: CART_ACTONS.ADD_TO_CART,
//      payload: cartItemtoAdd
     

// }}

// export const removefromCart = (cartItem:Object) => ({
//     type:CART_ACTONS.REMOVE_FROM_CART,
//     payload: cartItem
// })



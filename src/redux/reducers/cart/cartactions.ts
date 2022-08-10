
export const CART_ACTIONS = {
    ADD_TO_CART: "ADD_TO_CART",
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


  const clearCartItem = (cartItems:CartItemType[], cartItemToClear:number) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear);


  const decreaseCartItem = (cartItems: CartItemType[], cartItemtoDecrease:number) => {
    
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemtoDecrease
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemtoDecrease);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemtoDecrease
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  }

  const increaseCartItem = (cartItems: CartItemType[], cartItemtoDecrease:number) => {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemtoDecrease
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    }













export const addItemToCart = (cartItems: CartItemType[], productToAdd:CartItemType) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return addtoCart(CART_ACTIONS.ADD_TO_CART, newCartItems);
};


export const clearItemFromCart = (cartItems:CartItemType[], cartItemToClear:number) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return ClearfromCart(CART_ACTIONS.ADD_TO_CART, newCartItems);
};


export const DecreaseItem = (cartItems: CartItemType[], cartItemtoDecrease:number) => {
  const newCartItems = decreaseCartItem(cartItems, cartItemtoDecrease);
  return DecreasefromCart(CART_ACTIONS.ADD_TO_CART, newCartItems)
}

export const IncreaseItem = (cartItems: CartItemType[], cartItemtoIncrease:number) => {
  const newCartItems = increaseCartItem(cartItems, cartItemtoIncrease);
  return IncreasefromCart(CART_ACTIONS.ADD_TO_CART, newCartItems)
}



const addtoCart = (type:string, cart:CartItemType[]) => {
    return {
        type: type,
        payload:cart
    }
}


const ClearfromCart = (type:string, cart:CartItemType[]) => {
  return {
      type: type,
      payload:cart
  }
}

const DecreasefromCart = (type:string, cart:CartItemType[]) => {
  return {
      type: type,
      payload:cart
  }
}


const IncreasefromCart = (type:string, cart:CartItemType[]) => {
  return {
      type: type,
      payload:cart
  }
}


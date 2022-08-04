
export const SHOP_ACTIONS = {
    GET_SHOP: "GET_SHOP",
    SET_SHOP: "SET_SHOP"
}


export const getShop = () => ({
    type: SHOP_ACTIONS.GET_SHOP
})


export const setShop = (shopItems:Object) => ({
    type: SHOP_ACTIONS.SET_SHOP,
    shopItems: shopItems
})


import { takeEvery } from "redux-saga/effects"
import { SHOP_ACTIONS } from "./sagas/shop/shopactions"
import { HandleShop } from "./sagas/shop/shophandler"




export function* rootSaga() {
    yield takeEvery(SHOP_ACTIONS.GET_SHOP, HandleShop)
}

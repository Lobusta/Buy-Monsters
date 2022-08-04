import { call, put } from "redux-saga/effects";
import { setShop } from "./shopactions";
import { getShopfromURL } from "./shoprequest";






export function* HandleShop ():Object {

    try{
        const response =yield call(getShopfromURL);
        const {data} = response;
        yield put(setShop(data))
    
    }

    catch(error)
      {  console.log("ERROR_HANDLER_FUNCTION:" + error);
    }



}
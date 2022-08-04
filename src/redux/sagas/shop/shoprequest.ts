import axios from "axios";


export function* getShopfromURL ():Object {
  const data = yield axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users"
  });

  return data;
};

import axios from "axios";

export async function orderListRequest(page, limit) {
  try {
    let result = await axios.get("https://shop-wise-mern.vercel.app/api/v1/orders", {
      params: {
        page: page + 1,
        limit,
      },
    });
    return result?.data;
  } catch (e) {
    return e;
  }
}

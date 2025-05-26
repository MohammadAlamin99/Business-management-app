import axios from "axios";

export async function orderListRequest(page = 1, limit = 3) {
  try {
    let result = await axios.get("http://localhost:5000/api/v1/orders", {
      params: {
        page,
        limit,
      },
    });
    console.log(result)
    return result.data;
  } catch (e) {
    return e;
  }
}

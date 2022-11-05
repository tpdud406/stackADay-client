import axios from "axios";

export async function fetchData(endpointURL, apiMethod, bodyObj) {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_SERVER_REQUEST_HOST}${endpointURL}`,
      method: apiMethod,
      headers: {
        "Content-Type": "application/json",
      },
      data: bodyObj,
      withCredentials: true,
    });

    console.log("fetchData 함수의 res::::", res);

    return res;
  } catch (err) {
    console.error(err);
  }
}

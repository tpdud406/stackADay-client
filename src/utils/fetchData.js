import axios from "axios";

export async function fetchData(endpointURL, apiMethod, bodyObj) {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_SERVER_REQUEST_HOST}${endpointURL}`,
      method: apiMethod,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.jwt,
      },
      data: bodyObj,
    });

    console.log("fetchData 함수의 res::::", res);
    console.log("fetchData 함수의 res.data::::", res.data);

    return res;
  } catch (err) {
    console.error(err);
  }
}

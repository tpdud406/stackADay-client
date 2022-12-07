import axios from "axios";

export async function axiosData(endpointURL, apiMethod, bodyObj) {
  const res = await axios({
    url: `${process.env.REACT_APP_SERVER_REQUEST_HOST}${endpointURL}`,
    method: apiMethod,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.jwt,
    },
    data: bodyObj,
  });

  return res;
}

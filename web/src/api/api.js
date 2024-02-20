import axios from "axios";

const apiUrl = process.env.REACT_APP_URL_API;
const apiPort = process.env.REACT_APP_URL_PORT;
const URL_API = `http://${apiUrl}:${apiPort}/api/prompt`;

export const makeRequest = async (message) => {
  const { data } = await axios.post(URL_API, message);

  return data;
};

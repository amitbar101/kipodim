import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const getItems = async (type) => {
  const { data } = await axios.get(`/api/${type}`);
  return data;
}

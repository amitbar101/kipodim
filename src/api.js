import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const getItems = async (type) => {
  const { data } = await axios.get(`/api/${type}`);
  return data;
};

export const getOrders = async (filterText) => {
  const { data } = await axios.get(`/api/orders`, {
    params: { filterText }
  });
  return data;
};

export const getClosedOrders = async () => {
  const { data } = await axios.get(`/api/orders`, {
    params: { status: "closed" },
  });
  return data;
};

export const getOpenOrders = async () => {
  const { data } = await axios.get(`/api/orders`, {
    params: { status: "open" },
  });
  return data;
};

export const addNewItem = async () => {
  await axios.post(`/api/addNewItem`, {
    params: { }
  });
}

export const closeOrder = async (id, status) => {
  await axios.post(`/api/orders`, {
    params: { id ,status }
  });
};

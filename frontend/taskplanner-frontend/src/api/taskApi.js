import axios from "axios";

const API_URL = "http://localhost:3000/tasks/";

export const getTasks = async (token) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Token ${token}` },
  });
  return response.data;
};
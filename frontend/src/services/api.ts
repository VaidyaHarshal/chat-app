import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getMessages = async () => {
  const response = await axios.get(`${API_URL}/messages`);
  return response.data;
};

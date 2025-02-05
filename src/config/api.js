import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:8000/api/v1", // Adjust this based on your backend URL
  withCredentials: true, // Include cookies if authentication is used
  headers: {
    "Content-Type": "application/json",
  },
});

export const postRequest = async (url, payload) => {
  try {
    const result = await api.post(url, payload);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRequest = async (url) => {
  try {
    const result = await api.get(url);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

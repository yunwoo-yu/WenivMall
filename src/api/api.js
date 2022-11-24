import axios from "axios";

const apiUrl = "http://35.76.53.28:8080/";

const instance = axios.create({
  baseURL: apiUrl,
});

export const getProductData = async () => {
  try {
    const response = await instance.get("mall");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

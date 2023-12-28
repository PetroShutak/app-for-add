import axios from "axios";

const BASE_URL = "https://stem-server-db.onrender.com";

export const getProducts = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/products`);
    return data;
}

export const createProduct = async (product) => {
    const { data } = await axios.post(`${BASE_URL}/api/products`, product);
    return data;
}


import axios from "axios";
import { handleError } from "../utils/handleErrors";
import { LocalStorageKeys } from "../enums/local-storage-keys-enum";

const url = import.meta.env.VITE_API_URL;

const verifyToken = () => {
  const localUser = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));
  if (localUser) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localUser.token}`;
    return true;
  } else {
    return false;
  }
};

export async function addProduct(productList) {
  try {
    return await axios.post(`${url}/products`, { product_list: productList });
  } catch (error) {
    handleError(error);
  }
}

export async function getProductByName(productName) {
  try {
    return await axios.get(`${url}/product/${productName}`);
  } catch (error) {
    handleError(error);
  }
}

export async function getProductById(productId) {
  try {
    return await axios.get(`${url}/product/${productId}`);
  } catch (error) {
    handleError(error);
  }
}

export async function getProductsByUser(userName) {
  try {
    return await axios.get(`${url}/products/${userName}`);
  } catch (error) {
    handleError(error);
  }
}

export async function getAllProductsWithPagination(sortConfig, page) {
  try {
    return await axios.get(`${url}/products/${sortConfig}/${page}`);
  } catch (error) {
    handleError(error);
  }
}

//auth required
export async function updateProduct(data) {
  try {
    return await axios.put(`${url}/product`, data);
  } catch (error) {
    handleError(error);
  }
}

//auth required
export async function deleteProductsById(productList) {
  try {
    if (verifyToken())
      return await axios.delete(`${url}/products/id`, {
        data: { product_list: productList },
      });
  } catch (error) {
    handleError(error);
  }
}

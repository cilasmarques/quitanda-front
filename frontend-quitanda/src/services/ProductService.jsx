import axios from 'axios';
import { handleError } from '../utils/handleErrors';

const url = 'http://localhost:8000';

export async function addProduct(productList) {
  try {
    return await axios.post(`${url}/products`, {'product_list': productList});
  } catch (error) {
    handleError(error);
  };
}

export async function getAllProducts(sortConfig, page) {
  try {
    return await axios.get(`${url}/products/${sortConfig}/${page}`);
  } catch (error) {
    handleError(error);
  };
};

export async function getProductByName(productName) {
  try {
    return await axios.get(`${url}/product/${productName}`);
  } catch (error) {
    handleError(error);
  };
};

export async function getProductById(productId) {
  try {
    return await axios.get(`${url}/product/${productId}`)
  } catch (error) {
    handleError(error);
  };
};

export async function updateProduct(data) {
  try {
    return await axios.put(`${url}/product`, data,
      // headers: { 'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}`},
    );
  } catch (error) {
    handleError(error);
  };
};

export async function deleteProductById(productId) {
  try {
    return await axios.delete(`${url}/productid/${productId}`,
      // headers: { 'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}`},
    );
  } catch (error) {
    handleError(error);
  };
};

export async function getProductsByUser(userName) {
  try {
    return await axios.get(`${url}/products/${userName}`, {
      // headers: { 'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}` },
    });
  } catch (error) {
    handleError(error);
  };
};
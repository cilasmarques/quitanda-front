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

// NOT AUTH ROUTES
export async function addUser(user) {
  try {
    return await axios.post(`${url}/users`, user);
  } catch (error) {
    handleError(error);
  }
}

export async function getAllValidUsersWithPagination(sortConfig, page) {
  try {
    return await axios.get(`${url}/valid_users/${sortConfig}/${page}`);
  } catch (error) {
    handleError(error);
  }
}

export async function getAllValidUsers() {
  try {
    return await axios.get(`${url}/valid_users`);
  } catch (error) {
    handleError(error);
  }
}

export async function getUserByUsername(username) {
  try {
    return await axios.get(`${url}/user/${username}`);
  } catch (error) {
    handleError(error);
  }
}

// AUTH ROUTES
export async function getAllUsers() {
  try {
    if (verifyToken()) return await axios.get(`${url}/users`);
  } catch (error) {
    handleError(error);
  }
}

export async function getAllUsersWithPagination(sortConfig, page) {
  try {
    if (verifyToken())
      return await axios.get(`${url}/users/${sortConfig}/${page}`);
  } catch (error) {
    handleError(error);
  }
}

export async function getAllInvalidUsers() {
  try {
    if (verifyToken()) return await axios.get(`${url}/invalid_users`);
  } catch (error) {
    handleError(error);
  }
}

export async function getAllInvalidUsersWithPagination(sortConfig, page) {
  try {
    if (verifyToken())
      return await axios.get(`${url}/invalid_users/${sortConfig}/${page}`);
  } catch (error) {
    handleError(error);
  }
}

export async function updateUserByUsername(username, userData) {
  try {
    if (verifyToken())
      return await axios.patch(`${url}/user/${username}`, userData);
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUserByUsername(username) {
  try {
    if (verifyToken()) return await axios.delete(`${url}/users/${username}`);
  } catch (error) {
    handleError(error);
  }
}

export async function updateAccessAuthorization(
  username,
  access_authorization
) {
  try {
    if (verifyToken())
      return await axios.patch(`${url}/user/${username}/access_authorization`, {
        access_authorization: access_authorization,
      });
  } catch (error) {
    handleError(error);
  }
}

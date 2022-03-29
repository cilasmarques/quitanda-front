// import { api } from './api';
import axios from 'axios';
import { handleError } from '../utils/handleErrors';
import { LocalStorageKeys } from '../enums/local-storage-keys-enum';
import { useCallback } from 'react';

const url = 'http://localhost:8000';

// axios.interceptors.request.use(function (config) {
//   const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));
//   if (user) {
//     config.headers.Authorization = `Bearer ${user.token}`;
//   }
//   return config;
// });

export async function addUser(user) {
  try {
    return await axios.post(`${url}/users`, user);
  } catch (error) {
    handleError(error);
  };
}

//auth required
export async function getUsersList() {
  try {
    return await axios.get(`${url}/users`);
  } catch (error) {
    handleError(error);
  };
};

//auth required
export async function getAllUsersWithPagination(sortConfig, page) {
  try {
    return await axios.get(`${url}/users/${sortConfig}/${page}`);
  } catch (error) {
    handleError(error);
  };
};

export async function getAllValidUsersWithPagination(sortConfig, page) {
  try {
    return await axios.get(`${url}/valid_users/${sortConfig}/${page}`);
  } catch (error) {
    handleError(error);
  };
};

//auth required
export async function getAllInvalidUsersWithPagination(sortConfig, page) {
  try {
    return await axios.get(`${url}/invalid_users/${sortConfig}/${page}`);
  } catch (error) {
    handleError(error);
  };
};

//auth required
export async function getAllUsers() {
  try {
    return await axios.get(`${url}/users`);
  } catch (error) {
    handleError(error);
  };
};

export async function getAllValidUsers() {
  try {
    return await axios.get(`${url}/valid_users`);
  } catch (error) {
    handleError(error);
  };
};

//auth required
export async function getAllInvalidUsers() {
  try {
    return await axios.get(`${url}/invalid_users`);
  } catch (error) {
    handleError(error);
  };
};

export async function getUserByUsername(username) {
  try {
    return await axios.get(`${url}/user/${username}`);
  } catch (error) {
    handleError(error);
  };
};

//auth required
export async function updateUserByUsername(username, userData) {
  try {
    return await axios.patch(`${url}/user/${username}`, {
      // headers: { 'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}` },
      body: userData,
    });
  } catch (error) {
    handleError(error);
  };
};

//auth required
export async function deleteUserByUsername(username) {
  try {
    return await axios.delete(`${url}/users/${username}`);
  } catch (error) {
    handleError(error);
  };
};

//auth required
export async function updateAccessAuthorization(username, access_authorization) {
  try {
    return await axios.patch(`${url}/user/${username}/access_authorization`, { "access_authorization": access_authorization });
  } catch (error) {
    handleError(error);
  };
};
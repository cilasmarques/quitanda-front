import axios from 'axios';
import { handleError } from '../utils/handleErrors';

const url = 'http://localhost:8000';

export async function addUser(user) {
  try {
    return await axios.post(`${url}/users`, user);
  } catch (error) {
    handleError(error);
  };
}

export async function getUsersList() {
  try {
    return await axios.get(`${url}/users`);
  } catch (error) {
    handleError(error);
  };
};

export async function getAllUsers() {
  try {
    return await axios.get(`${url}/users`);
  } catch (error) {
    handleError(error);
  };
};

export async function getAllValidUsers(sortConfig, page) {
  try {
    return await axios.get(`${url}/valid_users/${sortConfig}/${page}`);
  } catch (error) {
    handleError(error);
  };
};

export async function getAllInvalidUsers(sortConfig, page) {
  try {
    return await axios.get(`${url}/invalid_users/${sortConfig}/${page}`);
  } catch (error) {
    handleError(error);
  };
};

export async function getUserByUsername(userName) {
  try {
    return await axios.get(`${url}/user/${userName}`);
  } catch (error) {
    handleError(error);
  };
};

export async function updateUserByUsername(userName, userData) {
  try {
    return await axios.patch(`${url}/user/${userName}`, {
      // headers: { 'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}` },
      body: userData,
    });
  } catch (error) {
    handleError(error);
  };
};

export async function deleteUserByUsername(userName) {
  try {
    return await axios.delete(`${url}/users/${userName}`, {
      // headers: { 'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}` },
    });
  } catch (error) {
    handleError(error);
  };
};

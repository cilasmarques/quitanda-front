import axios from 'axios';
// import Cookies from 'js-cookie'
import { handleError } from '../utils/handleErrors';

const url = 'http://localhost:8000';

export async function addUser(user) {
  try {
    return await axios.post(`${url}/users`, user,
      {
        // headers: {
        //   'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}`
        // },
      })
  } catch (error) {
    handleError(error);
  };
}

export async function getAllUsers(sort_config, page) {
  try {
    return await axios.get(`${url}/users`,
      {
        // headers: {
        //   'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}`
        // },
        body: {
          "sort_config": sort_config,
          "page": page
        },
      })
  } catch (error) {
    handleError(error);
  };
};

export async function getAllValidUsers(sort_config, page) {
  try {
    return await axios.get(`${url}/valid_users`,
      {
        // headers: {
        //   'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}`
        // },
        body: {
          "sort_config": sort_config,
          "page": page
        },
      })
  } catch (error) {
    handleError(error);
  };
};


export async function getAllInvalidUsers(sort_config, page) {
  try {
    return await axios.get(`${url}/invalid_users`,
      {
        // headers: {
        //   'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}`
        // },
        body: {
          "sort_config": sort_config,
          "page": page
        },
      })
  } catch (error) {
    handleError(error);
  };
};

export async function getUserByUsername(userName) {
  try {
    return await axios.get(`${url}/user/${userName}`,
      {
        // headers: {
        //   'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}`
        // },
      })
  } catch (error) {
    handleError(error);
  };
};

export async function updateUserByUsername(userName, userData) {
  try {
    return await axios.put(`${url}/user/${userName}`, userData,
      {
        // headers: {
        //   'Authorization': `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}`
        // },
      })
  } catch (error) {
    handleError(error);
  };
};

// TODO - implementar o delete > esperando o backend ficar pronto
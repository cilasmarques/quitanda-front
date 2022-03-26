import axios from 'axios';
import { handleError } from '../utils/handleErrors';

const url = 'http://localhost:8000';

export async function loginAdmin(username, password) {
  try {
    return await axios.post(`${url}/login?admin=true`, {'username': username, 'password': password});
  } catch (error) {
    handleError(error);
  };
}

export async function loginUser(username, password) {
  try {
    return await axios.post(`${url}/login`, {'username': username, 'password': password});
  } catch (error) {
    handleError(error);
  };
}
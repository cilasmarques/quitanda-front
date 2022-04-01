import axios from "axios";
import { handleError } from "../utils/handleErrors";

const url = "https://api-quitanda.herokuapp.com";

export async function loginAdmin(uname, pass) {
  try {
    return await axios.post(
      `${url}/login?adm=true`,
      {},
      {
        auth: {
          username: uname,
          password: pass,
        },
      }
    );
  } catch (error) {
    handleError(error);
  }
}

export async function loginUser(uname, pass) {
  try {
    return await axios.post(
      `${url}/login`,
      {},
      {
        auth: {
          username: uname,
          password: pass,
        },
      }
    );
  } catch (error) {
    handleError(error);
  }
}

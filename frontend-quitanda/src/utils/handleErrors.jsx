// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { INTERNAL_ERROR_URL, HOME_URL } from './constants'

// export const handleReplaceToLogin = () => {
//   Cookies.remove("token");
//   window.localStorage.clear();
//   window.location.replace(HOME_URL);
// }

export const handleError = (error) => {
  // if (axios.isCancel(error)) {
  //   console.log("Request canceled");
  // }
  if (error.response && error.response.data.message) {
    if (error.response.status === 401) {
      window.alert(error.response.data.message);
      // handleReplaceToLogin();
    }
    else if (error.response.status === 500) {
      window.alert(error.response.data.message);
      // window.location.replace(INTERNAL_ERROR_URL);
    }
    else if (!axios.isCancel(error)) {
      window.alert(error.response.data.message);
    }
  }
}

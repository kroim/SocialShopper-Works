import { getCall, postCall } from "../apiCall";

class BackendAPI {
  constructor() {
      let token = localStorage.getItem("token");
      console.log('session token', token);
      if(!token) return;
      // getCall(
      //   `{
      //     me(token: "${token}"){
      //       _id,
      //       email,
      //       name,
      //       token
      //     }
      //   }`,
      //   (res) => {
      //     if (res.me) {
      //       localStorage.setItem("token", res.me.token);
      //       localStorage.setItem("authUser", JSON.stringify(res.me));
      //     } else {
      //       localStorage.removeItem("authUser");
      //     }
      //   });
  }

  /**
   * Registers the user with given details
   */
  registerUser = (email, phone, password) => {
    return new Promise((resolve, reject) => {
      postCall('/register', { email, phone, password },
      (res) => {
            resolve(res);
          },
          error => {
            reject(this._handleError(error));
          }
      );
    });
  };

  /**
   * Login user with given details
   */
  loginUser = (email, password) => {
        console.log('login user', email, password);
    return new Promise((resolve, reject) => {
      getCall('/login', {email, password},(res) => {
            resolve(res);
          },
          error => {
            reject(this._handleError(error));
          }
        );
    });
  };

  /**
   * forget Password user with given details
   */
  forgetPassword = email => {
    return new Promise((resolve, reject) => {
      postCall('',() => {
          console.log("yes authutils");
          resolve(true);
        })
        .catch(error => {
          reject(this._handleError(error));
        });
    });
  };

  /**
   * Logout the user
   */
  logout = () => {
    return new Promise((resolve, reject) => {
      postCall('',() => {
          resolve(true);
        })
        .catch(error => {
          reject(this._handleError(error));
        });
    });
  };

  setLoggeedInUser = user => {
    localStorage.setItem("authUser", JSON.stringify(user));
  };

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser = () => {
    if (!localStorage.getItem("authUser")) return null;
    return JSON.parse(localStorage.getItem("authUser"));
  };

  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error) {
    // var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage;
  }
}

let _backendAPI = null;

/**
 * Initilize the backend
 * @param {*} config
 */
const initBackendAPI = () => {
  if (!_backendAPI) {
    _backendAPI = new BackendAPI();
  }
  return _backendAPI;
};

/**
 * Returns the backend
 */
const getBackendAPI = () => {
  return _backendAPI;
};

export { initBackendAPI, getBackendAPI };

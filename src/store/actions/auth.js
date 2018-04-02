//Action creator for auth start, return type for auth start -> this will start auth process which will call auth actionCreator, auth will take in user info, and make ajax call to backend -> the return result will call authSuccess(take in userinfo and token, submit to local storage, and redirect to feed page/ dashboard), authFail will alert user of fail, and keep them on landing page
import axios from "axios";
import * as types from "../constants";

export const authStart = () => {
  return {
    type: types.AUTH_START
  };
};

export const authSuccess = data => {
  return {
    type: types.AUTH_SUCCESS,
    payload: data
  };
};

export const authFail = error => {
  return {
    type: types.AUTH_FAIL,
    payload: error
  };
};

export const auth = (user, mode) => async dispatch => {
  dispatch(authStart());
  const authData = {
    username: user.username,
    password: user.password
  };
  const res = await axios.post("/api/users/new", authData);
  dispatch({ type: types.AUTH, payload: res.data });
};

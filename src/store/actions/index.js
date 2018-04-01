import axios from "axios";
import { FETCH_LOCAL_USER, FETCH_TOKEN, LOGIN } from "../constants";

export const fetchToken = dispatch => {
  let token = localStorage.getItem("token");
  dispatch({ type: FETCH_TOKEN, payload: token });
};

export const fetchLocalUser = () => dispatch => {
  let user = localStorage.getItem("user");
  dispatch({ type: FETCH_LOCAL_USER, payload: user });
};

export const register = userInfo => {
  return async dispatch => {
    let res = await axios.post("/api/users/new", {
      username: userInfo.username,
      password: userInfo.password
    });
    dispatch({ type: LOGIN, payload: res.data });
  };
};

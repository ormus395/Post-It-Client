import axios from "axios";
import * as types from "../constants";

//Load start
export const authStart = () => {
  return {
    type: types.AUTH_START
  };
};
export const loadStart = () => {
  return {
    type: types.LOAD_START
  };
};
//load user complete
export const fetchUser = () => async dispatch => {
  let token = localStorage.getItem("token");
  dispatch(loadStart());
  try {
    let res = await axios.get("/api/users/profile", {
      method: "get",
      headers: { Authorization: "Bearer " + token }
    });
    dispatch({ type: types.LOAD_USER, payload: res.data.user });
  } catch (err) {}
};
//load posts complete
export const loadFeed = () => async dispatch => {
  let res = await fetch("api/posts/all");
  let json = await res.json();
  dispatch({ type: types.LOAD_POSTS, payload: json.posts });
};
//load chat complete

//Handle Post Submit
export const postSubmit = post => async dispatch => {
  console.log(post);
  let token = localStorage.getItem("token");
  let headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  });
  console.log(token);
  let res = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ content: post }),
    headers: headers
  });
  dispatch({ type: types.POST_SUBMIT, payload: res.data });
};

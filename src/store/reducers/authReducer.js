import { FETCH_LOCAL_USER, LOGIN } from "../constants";

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_LOCAL_USER:
      return action.payload || false;
    case LOGIN:
      let user = JSON.stringify(action.payload.user);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", user);
      return action.payload.user;
    default:
      return state;
  }
}

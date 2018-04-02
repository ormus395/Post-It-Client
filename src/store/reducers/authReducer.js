import * as types from "../constants";

const initialState = {
  user: null,
  token: null,
  error: null,
  loading: null
};

const auth = (state, action) => {};

const authStart = (state, action) => {};

const authFail = (state, action) => {};

const authSuccess = (state, action) => {};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
}

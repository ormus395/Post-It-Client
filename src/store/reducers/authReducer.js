import * as types from "../constants";

const initialState = {
  userId: null,
  token: null,
  error: null,
  loading: false
};

const auth = (state, action) => {};

const authStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    error: true,
    loading: false
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    token: action.payload.token,
    userId: action.payload.user.id,
    loading: false
  };
};

const logout = (state, action) => {
  return {
    ...state,
    userId: null,
    token: null
  };
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case types.AUTH_START:
      return authStart(state, action);
    case types.AUTH_SUCCESS:
      return authSuccess(state, action);
    case types.AUTH_FAIL:
      return authFail(state, action);
    case types.LOGOUT:
      return logout(state);
    default:
      return state;
  }
}

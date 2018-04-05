import * as types from "../constants";

let initialState = {
  user: {},
  loading: false,
  posts: [],
  chat: [],
  error: null
};

const loadStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const fetchUser = (state, action) => {
  return {
    ...state,
    user: action.payload,
    loading: false,
    error: null
  };
};

// const postSubmit = (state, action) => {
//   return {
//     ...state,
//   }
// }

const loadFeed = (state, action) => {
  return {
    ...state,
    posts: action.payload,
    loading: false,
    error: null
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_START:
      return loadStart(state, action);
    case types.LOAD_USER:
      return fetchUser(state, action);
    case types.LOAD_POSTS:
      return loadFeed(state, action);
    default:
      return state;
  }
}

import Api from "../api/api";

const SET_AUTH_DATA = "SET-AUTH-DATA";

export const setAuthData = () => (dispatch) => {
  Api.setAuth().then((data) => {
    dispatch({ type: SET_AUTH_DATA, data });
  });
};

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default authReducer;

import Api from "../api/api";

const SET_AUTH_DATA = "authReducer/SET-AUTH-DATA";
const SET_CORECT_DATA = "authReducer/SET-CORECT-DATA";

const setAuth = (data, isAuth, isCorectlData) => ({
  type: SET_AUTH_DATA,
  data,
  isAuth,
  isCorectlData,
});

export const setAuthData = () => async (dispatch) => {
  const data = await Api.setAuth();
  if (data.resultCode === 0) dispatch(setAuth(data.data, true, null));
};

export const loginAuth = (email, password, rememberMe) => async (dispatch) => {
  const data = await Api.login(email, password, rememberMe);
  console.log(data.data.resultCode);
  switch (data.data.resultCode) {
    case 0:
      dispatch(setAuthData());
      break;
    case 1:
      dispatch({
        type: SET_CORECT_DATA,
        isCorectlData: data.data.messages[0],
      });
      break;
  }
  data.data.resultCode === 0 && dispatch(setAuthData());
};

export const logoutAuth = () => async (dispatch) => {
  const data = await Api.logout();
  console.log(data.data.resultCode);
  data.data.resultCode === 0 &&
    dispatch(setAuth({ id: null, login: null, email: null }, false, null));
};

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuthenticated: false,
  isCorectlData: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuthenticated: action.isAuth,
        isCorectlData: action.isCorectlData,
      };
    case SET_CORECT_DATA:
      return {
        ...state,
        isCorectlData: action.isCorectlData,
      };
    default:
      return state;
  }
};

export default authReducer;

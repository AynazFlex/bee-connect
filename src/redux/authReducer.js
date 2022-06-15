import Api from "../api/api";

const SET_AUTH_DATA = "authReducer/SET-AUTH-DATA";
const SET_CORECT_DATA = "authReducer/SET-CORECT-DATA";
const SET_CAPTCHA_URL = "authReducer/SET-CAPTCHA-URL";

const setAuth = (data, isAuth, isCorectlData) => ({
  type: SET_AUTH_DATA,
  data,
  isAuth,
  isCorectlData,
});

const setCaptchaUrl = (url) => ({ type: SET_CAPTCHA_URL, url });

const getCaptchaUrl = () => async (dispatch) => {
  const data = await Api.getCaptchaUrl();
  dispatch(setCaptchaUrl(data.data.url));
};

export const setAuthData = () => async (dispatch) => {
  const data = await Api.setAuth();
  if (data.resultCode === 0) dispatch(setAuth(data.data, true, null));
};

export const loginAuth =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await Api.login(email, password, rememberMe, captcha);
    if (data.data.resultCode === 0) {
      dispatch(setAuthData());
    } else {
      data.data.resultCode === 10 && dispatch(getCaptchaUrl());
      dispatch({
        type: SET_CORECT_DATA,
        isCorectlData: data.data.messages[0],
      });
    }
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
  data.data.resultCode === 0 &&
    dispatch(setAuth({ id: null, login: null, email: null }, false, null));
};

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuthenticated: false,
  isCorectlData: null,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuthenticated: action.isAuth,
        isCorectlData: action.isCorectlData,
        captchaUrl: null,
      };
    case SET_CORECT_DATA:
      return {
        ...state,
        isCorectlData: action.isCorectlData,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.url,
      };
    default:
      return state;
  }
};

export default authReducer;

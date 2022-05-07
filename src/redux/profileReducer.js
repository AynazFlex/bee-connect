import Api from "../api/api";

const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";

const setProfile = (profile) => ({ type: SET_PROFILE, profile });

const setStatus = (status) => ({ type: SET_STATUS, status });

export const getStatus = (userId) => (dispatch) => {
  Api.getStatus(userId).then((data) => {
    dispatch(setStatus(data));
  });
};

export const putStatus = (status) => (dispatch) => {
  Api.putStatus(status).then((response) => {
    response.data.resultCode === 0 && dispatch(setStatus(status));
  });
};

export const getProfile = (userId) => (dispatch) => {
  Api.getProfile(userId).then((data) => dispatch(setProfile(data)));
};

const initialState = {
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export default profileReducer;

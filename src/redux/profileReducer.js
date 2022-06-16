import Api from "../api/api";

const SET_PROFILE = "profileReducer/SET-PROFILE";
const SET_STATUS = "profileReducer/SET-STATUS";
const OPEN_PROFILE = "profileReducer/OPEN-PROFILE";
const STATUS_IS_FETCHING = "profileReducer/STATUS_IS_FETCHING";
const ERROR_OF_STATUS = "profileReducer/ERROR_STATUS";

export const setError = (mess) => ({ type: ERROR_OF_STATUS, mess });

const openProfile = (isOpen) => ({ type: OPEN_PROFILE, isOpen });

const setProfile = (profile) => ({ type: SET_PROFILE, profile });

const setStatus = (status) => ({ type: SET_STATUS, status });

const fetchStatus = (process) => ({ type: STATUS_IS_FETCHING, process });

export const getStatus = (userId) => async (dispatch) => {
  dispatch(fetchStatus(true));
  const data = await Api.getStatus(userId);
  dispatch(setStatus(data));
  dispatch(fetchStatus(false));
};

export const putStatus = (status) => async (dispatch) => {
  dispatch(fetchStatus(true));
  try {
    const response = await Api.putStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    } else {
      dispatch(setError(response.data.messages[0]));
      setTimeout(() => dispatch(setError(null)), 3000);
    }
    dispatch(fetchStatus(false));
  } catch (error) {
    alert('some error');
  }
};

export const getProfile = (userId) => async (dispatch) => {
  dispatch(openProfile(false));
  const data = await Api.getProfile(userId);
  dispatch(setProfile(data));
  dispatch(openProfile(true));
};

const initialState = {
  profile: null,
  status: "",
  isOpenProfile: false,
  statusIsFetching: false,
  errorMessage: null,
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
        errorMessage: null,
      };
    case OPEN_PROFILE:
      return {
        ...state,
        isOpenProfile: action.isOpen,
      };
    case STATUS_IS_FETCHING:
      return {
        ...state,
        statusIsFetching: action.process,
      };
    case ERROR_OF_STATUS:
      return {
        ...state,
        errorMessage: action.mess,
      };
    default:
      return state;
  }
};

export default profileReducer;

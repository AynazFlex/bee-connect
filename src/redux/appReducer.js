import { setAuthData } from "./authReducer";
const INITIAL_APP = "appReducer/INITIAL-APP";

const initialState = {
  isInitialized: false,
};

export const setInitialApp = () => async (dispatch) => {
  await Promise.all([dispatch(setAuthData())]);
  dispatch({ type: INITIAL_APP });
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_APP:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

export default appReducer;

import { setAuthData } from "./authReducer";
const INITIAL_APP = "INITIAL-APP";

const initialState = {
  isInitialized: false,
};

export const setInitialApp = () => (dispatch) => {
  Promise.all([dispatch(setAuthData())]).then(() => dispatch({ type: INITIAL_APP }));
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

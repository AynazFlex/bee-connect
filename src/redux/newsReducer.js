import Api from "../api/api";

const SET_NEWS = "SET_NEWS";

export const setNews = () => (dispatch) => {
  Api.setNews().then((data) => dispatch({ type: SET_NEWS, data }));
};

const initialState = {
    news: null,
    isGet: false,
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        news: action.data,
        isGet: true,
      };
    default:
      return state;
  }
};

export default newsReducer;

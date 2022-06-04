import Api from "../api/api";

const FOLLOW_UNFOLLOW = "userReducer/FOLLOW-UNFOLLOW";
const SET_USERS = "userReducer/SET-USERS";
const SET_TOTAL_COUNT = "userReducer/SET-TOTAL-COUNT";
const SET_ACTIVE_PAGE = "userReducer/SET-ACTIVE-PAGE";
const TOGGLE_LOADING = "userReducer/TOGGLE-LOADING";
const TOGGLE_FOLLOWING = "userReducer/TOGGLE-FOLLOWING";

const followed = (userId, follow) => ({
  type: FOLLOW_UNFOLLOW,
  userId,
  follow,
});

const setUsers = (users) => ({ type: SET_USERS, users });

const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

const setActive = (page) => ({ type: SET_ACTIVE_PAGE, page });

const isFetching = (isFetching) => ({
  type: TOGGLE_LOADING,
  isFetching,
});

const toggleFollowing = (index, progress) => ({
  type: TOGGLE_FOLLOWING,
  index,
  progress,
});

export const getUsers = (pageSize) => async (dispatch) => {
  dispatch(isFetching(true));
  const data = await Api.getUsers(1, pageSize);
  dispatch(setUsers(data.items));
  dispatch(setTotalCount(data.totalCount));
  dispatch(setActive(1));
  dispatch(isFetching(false));
};

export const changeUsers = (page, pageSize) => async (dispatch) => {
  dispatch(isFetching(true));
  const data = await Api.getUsers(page, pageSize);
  dispatch(setUsers(data.items));
  dispatch(isFetching(false));
  dispatch(setActive(page));
};

export const setUnfollow = (id) => async (dispatch) => {
  dispatch(toggleFollowing(id, true));
  const data = await Api.deleteFollow(id);
  data.resultCode === 0 && dispatch(followed(id, false));
  dispatch(toggleFollowing(id, false));
};

export const setFollow = (id) => async (dispatch) => {
  dispatch(toggleFollowing(id, true));
  const data = await Api.postFollow(id);
  data.resultCode === 0 && dispatch(followed(id, true));
  dispatch(toggleFollowing(id, false));
};

const initialState = {
  users: [],
  totalCount: 0,
  pageSize: 10,
  activePage: 1,
  isFetch: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          action.userId === user.id
            ? { ...user, followed: action.follow }
            : user
        ),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users.map((user) => ({
          id: user.id,
          avatar: user.photos.small || "https://vk.com/images/camera_200.png",
          name: user.name,
          birthday: user.birthday || "Дата рождения не указана",
          locations: user.locations || user.status || "Локация не указана",
          followed: user.followed,
        })),
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.page,
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        isFetch: action.isFetching,
      };
    case TOGGLE_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.progress
          ? [...state.followingInProgress, action.index]
          : state.followingInProgress.filter((i) => i != action.index),
      };
    default:
      return state;
  }
};

export default usersReducer;

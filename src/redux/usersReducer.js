import Api from "../api/api";

const FOLLOW_UNFOLLOW = "FOLLOW-UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_ACTIVE_PAGE = "SET-ACTIVE-PAGE";
const TOGGLE_LOADING = "TOGGLE-LOADING";
const TOGGLE_FOLLOWING = "TOGGLE-FOLLOWING";

export const followed = (userId, follow) => ({
  type: FOLLOW_UNFOLLOW,
  userId,
  follow,
});

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const setActive = (page) => ({ type: SET_ACTIVE_PAGE, page });

export const isFetching = (isFetching) => ({
  type: TOGGLE_LOADING,
  isFetching,
});

export const toggleFollowing = (index, progress) => ({
  type: TOGGLE_FOLLOWING,
  index,
  progress,
});

export const getUsersThunkCreate = (pageSize) => (dispatch) => {
  dispatch(isFetching(true));
  Api.getUsers(1, pageSize).then((data) => {
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(setActive(1));
    dispatch(isFetching(false));
  });
};

export const changeUsersThunkCreate = (page, pageSize) => (dispatch) => {
  dispatch(isFetching(true));
  Api.getUsers(page, pageSize).then((data) => {
    dispatch(setUsers(data.items));
    dispatch(isFetching(false));
  });
  dispatch(setActive(page));
};

export const setUnfollowThunkCreate = (id) => (dispatch) => {
  dispatch(toggleFollowing(id, true));
  Api.deleteFollow(id).then((data) => {
    data.resultCode === 0 && dispatch(followed(id, false));
    dispatch(toggleFollowing(id, false));
  });
};

export const setFollowThunkCreate = (id) => (dispatch) => {
  dispatch(toggleFollowing(id, true));
  Api.postFollow(id).then((data) => {
    data.resultCode === 0 && dispatch(followed(id, true));
    dispatch(toggleFollowing(id, false));
  });
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

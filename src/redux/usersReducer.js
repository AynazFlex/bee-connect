const FOLLOW_UNFOLLOW = "FOLLOW-UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_ACTIVE_PAGE = "SET-ACTIVE-PAGE";
const TOGGLE_LOADING = "TOGGLE-LOADING";

export const FollowUnfollowActionCreat = (userId) => ({
  type: FOLLOW_UNFOLLOW,
  userId,
});

export const SetUsersActionCreat = (users) => ({ type: SET_USERS, users });

export const SetTotalCountActionCreat = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const SetActiveActionCreat = (page) => ({ type: SET_ACTIVE_PAGE, page });

export const toggleLoadingActionCreat = (isFetching) => ({ type: TOGGLE_LOADING, isFetching})

const initialState = {
  users: [],
  totalCount: 0,
  pageSize: 20,
  activePage: 1,
  isFetch: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          action.userId === user.id
            ? { ...user, followed: !user.followed }
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
        }
    default:
      return state;
  }
};

export default usersReducer;

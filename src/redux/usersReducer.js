const FOLLOW_UNFOLLOW = "FOLLOW-UNFOLLOW";
const SET_USERS = "SET-USERS";

export const FollowUnfollowActionCreat = (userId) => ({
  type: FOLLOW_UNFOLLOW,
  userId: userId,
});

export const SetUsersActionCreat = (users) => ({ type: SET_USERS, users });

const initialState = {
  users: [],

  ava: "https://vk.com/images/camera_200.png",
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
          avatar: user.photos.small || state.ava,
          name: user.name,
          birthday: user.birthday || "Дата рождения не указана",
          locations: user.locations || "Локация не указана",
        })),
      };
    default:
      return state;
  }
};

export default usersReducer;

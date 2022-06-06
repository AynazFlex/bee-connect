import Api from "../api/api";

const COMMIT_FORM_EDIT = "dataReducer/COMMIT_FORM_EDIT";
const ADD_POST = "dataReducer/ADD_POST";
const OPEN_MESSAGE = "dataReducer/OPEN_MESSAGE";
const SEND_MESSAGE = "dataReducer/SEND_MESSAGE";
const CLOSE_MESSAGE = "dataReducer/CLOSE_MESSAGE";
const DELETE_POST = "dataReducer/DELETE_POST";
const SET_MY_PROFILE = "dataReducer/SET_MY_PROFILE";
const INITIAL_PROFILE = "dataReducer/INITIAL_PROFILE";
const UPDATE_PHOTO = "dataReducer/UPDATE_PHOTO";

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const commitForm = (data) => ({ type: COMMIT_FORM_EDIT, data });

export const addPost = (body) => ({ type: ADD_POST, body });

export const openMessage = (index) => ({
  type: OPEN_MESSAGE,
  index: index,
});

export const closeMessage = () => ({
  type: CLOSE_MESSAGE,
});

export const sendMessage = (body) => ({
  type: SEND_MESSAGE, body
});

const setMyProfile = (profile) => ({ type: SET_MY_PROFILE, profile});

const initiatedProfile = (status) => ({ type: INITIAL_PROFILE, status});

const setPhoto = (photo) => ({ type: UPDATE_PHOTO, photo});

export const getMyProfile = (myId) => async (dispatch) => {
  dispatch(initiatedProfile(false));
  const data = await Api.getProfile(myId);
  console.log(data);
  dispatch(setMyProfile(data));
  dispatch(initiatedProfile(true));
}

export const updatePhoto = (photo) => async (dispatch) => {
  const response = await Api.updatePhoto(photo);
  console.log(response.data.data.photos.small);
  response.data.resultCode === 0 && dispatch(setPhoto(response.data.data.photos.large));
}

const initialState = {
  profile: {
    name: "Айназ Давлетшин",
    age: "17 мая 2003",
    job: "Frontend Developer",
    address: "Россия, Mосква",
  },

  profileInitiated: false,

  shortName: "Айназ",

  main: {
    posts: [
      {
        ava: "https://www.w3schools.com/w3images/avatar2.png",
        profileName: "John Doe",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: 1667658240000,
      },
      {
        ava: "https://www.w3schools.com/w3images/avatar5.png",
        profileName: "Jane Doe",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: 1662365640000,
      },
      {
        ava: "https://www.w3schools.com/w3images/avatar6.png",
        profileName: "Angie Jane",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: 1654416240000,
      },
      {
        ava: "https://vk.com/images/camera_200.png",
        profileName: "Ilkhan Davletshin",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: 1654093440000,
      },
    ]
  },

  avatar: "https://vk.com/images/camera_200.png",

  messagesPage: {
    isOpen: false,

    index: "",

    messages: [
      {
        title: {
          ava: "https://www.w3schools.com/w3images/avatar5.png",
          name: "Jane Doe",
          lastmessage: "Хорошо",
          shortName: "Jane",
        },

        dialogs: [
          {
            identefication: "interlocutor",
            body: "Привет",
            date: 1654093440000,
          },
          {
            identefication: "me",
            body: "Привет",
            date: 1654093440500,
          },
          {
            identefication: "interlocutor",
            body: "Как дела?",
            date: 1654093440681,
          },
          {
            identefication: "me",
            body: "Хорошо",
            date: 1654093780740
          },
        ],
      },
      {
        title: {
          ava: "https://www.w3schools.com/w3images/avatar6.png",
          name: "Angie Jane",
          lastmessage: "Привет",
          shortName: "Angie",
        },

        dialogs: [
          {
            identefication: "interlocutor",
            body: "Привет",
            date: 1654093440500,
          },
        ],
      },
      {
        title: {
          ava: "https://www.w3schools.com/w3images/avatar2.png",
          name: "Jane Doe",
          lastmessage: "Привет",
          shortName: "Jane",
        },

        dialogs: [
          {
            identefication: "interlocutor",
            body: "Привет",
            date: 1654093440500,
          },
        ],
      },
      {
        title: {
          ava: "https://www.w3schools.com/w3images/avatar1.png",
          name: "Артур Хуесосов",
          lastmessage: "Привет",
          shortName: "Артут",
        },

        dialogs: [
          {
            identefication: "interlocutor",
            body: "Привет",
            date: 1654093440600,
          },
        ],
      },
    ],
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_PROFILE:
      return {
        ...state,
        profileInitiated: action.status,
      }
    case SET_MY_PROFILE: 
      return {
        ...state,
        profile: {
          name: action.profile.fullName,
          address: state.profile.address,
          age: state.profile.age,
          job: action.profile.aboutMe || state.profile.job,
        },
        avatar: action.profile.photos.large || 'https://vk.com/images/camera_200.png',
        shortName: (action.profile.fullName).split(" ")[0],
      }
    case UPDATE_PHOTO:
      return {
        ...state,
        avatar: action.photo,
      }
    case COMMIT_FORM_EDIT: {
      return {
        ...state,
        profile: {
          ...state.profile,
          name: action.data.fullname || state.profile.name,
          address: action.data.address || state.profile.address,
          age: action.data.birthday || state.profile.age,
          job: action.data.job || state.profile.job,
        },
        shortName: (action.data.fullname || state.profile.name).split(" ")[0]
      };
    }
    case ADD_POST: {
      const post = {
        ava: state.avatar,
        profileName: state.profile.name,
        body: action.body,
        date: Date.now(),
      };

      return {
        ...state,
        main: {
          posts: [post, ...state.main.posts]
        },
      };
    }
    case DELETE_POST:
      return {
        ...state,
        main: {
          posts: state.main.posts.filter((post) => post.date !== action.postId)
        }
      }
    case OPEN_MESSAGE: {
      return {
        ...state,
        messagesPage: {
          ...state.messagesPage,
          isOpen: true,
          index: action.index,
        },
      };
    }
    case SEND_MESSAGE: {
      const index = state.messagesPage.index;
      const message = {
        identefication: "me",
        body: action.body,
        date: Date.now(),
      };
      return {
        ...state,
        messagesPage: {
          ...state.messagesPage,
          messages: [
            ...state.messagesPage.messages.slice(0, index),
            {
              title: {
                ...state.messagesPage.messages[index].title,
                lastmessage: action.body,
              },

              dialogs: [...state.messagesPage.messages[index].dialogs, message],
            },
            ...state.messagesPage.messages.slice(+index + 1),
          ],
        },
      };
    }
    case CLOSE_MESSAGE:
      return {
        ...state,
        messagesPage: {
          ...state.messagesPage,
          isOpen: false,
          index: "",
        },
      };
    default:
      return state;
  }
};

export default dataReducer;

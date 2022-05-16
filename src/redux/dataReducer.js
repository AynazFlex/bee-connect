const COMMIT_FORM_EDIT = "COMMIT_FORM_EDIT";
const ADD_POST = "ADD_POST";
const OPEN_MESSAGE = "OPEN_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";
const CLOSE_MESSAGE = "CLOSE_MESSAGE";

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

const initialState = {
  profile: {
    name: "Айназ Давлетшин",
    age: "17 мая 2003",
    job: "Frontend Developer",
    address: "Россия, Mосква",
    id: 1713,
  },

  shortName: "Айназ",

  main: {
    posts: [
      {
        ava: "https://www.w3schools.com/w3images/avatar2.png",
        profileName: "John Doe",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "1 min",
      },
      {
        ava: "https://www.w3schools.com/w3images/avatar5.png",
        profileName: "Jane Doe",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "32 min",
      },
      {
        ava: "https://www.w3schools.com/w3images/avatar6.png",
        profileName: "Angie Jane",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "1 day",
      },
      {
        ava: "https://vk.com/images/camera_200.png",
        profileName: "Ilkhan Davletshin",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "1 day 12 hours",
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
          },
          {
            identefication: "me",
            body: "Привет",
          },
          {
            identefication: "interlocutor",
            body: "Как дела?",
          },
          {
            identefication: "me",
            body: "Хорошо",
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
          },
        ],
      },
    ],
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
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
        date: "0 sec",
      };

      return {
        ...state,
        main: {
          posts: [post, ...state.main.posts]
        },
      };
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

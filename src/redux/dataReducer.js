const CHANGE_FORM_EDIT = "CHANGE_FORM_EDIT";
const COMMIT_FORM_EDIT = "COMMIT_FORM_EDIT";
const ADD_POST = "ADD_POST";
const CHANGE_ENTRY_FIELD = "CHANGE_ENTRY_FIELD";
const OPEN_MESSAGE = "OPEN_MESSAGE";
const NEW_MESSAGE = "NEW_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";
const CLOSE_MESSAGE = "CLOSE_MESSAGE";

export const changeFormActionCreate = (name, value) => ({
  type: CHANGE_FORM_EDIT,
  name: name,
  value: value,
});

export const commitFormActionCreate = () => ({ type: COMMIT_FORM_EDIT });

export const addPostActionCreate = () => ({ type: ADD_POST });

export const changeEntryActionCreate = (text) => ({
  type: CHANGE_ENTRY_FIELD,
  newText: text,
});

export const openMessageActionCreate = (index) => ({
  type: OPEN_MESSAGE,
  index: index,
});

export const closeMessageActionCreate = () => ({
  type: CLOSE_MESSAGE,
});

export const newMessageActionCreate = (body) => ({
  type: NEW_MESSAGE,
  body: body,
});

export const sendMessageActionCreate = () => ({
  type: SEND_MESSAGE,
});

const initialState = {
  profile: {
    name: "Айназ Давлетшин",
    age: "17 мая 2003",
    job: "Frontend Developer",
    address: "Россия, Mосква",
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
    ],

    textOfPost: "",
  },

  edit: {
    FullName: "",
    birthday: "",
    address: "",
    job: "",
  },

  avatar: "https://vk.com/images/camera_200.png",

  messagesPage: {
    isOpen: false,

    index: "",

    newMessage: "",

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
    case CHANGE_FORM_EDIT: {
      switch (action.name) {
        case "fullname":
          return {
            ...state,
            edit: {
              ...state.edit,
              FullName: action.value,
            },
          };
        case "address": 
          return {
            ...state,
            edit: {
              ...state.edit,
              address: action.value,
            },
          };
        case "birthday": 
          return {
            ...state,
            edit: {
              ...state.edit,
              birthday: action.value,
            },
          };
        case "job": 
          return {
            ...state,
            edit: {
              ...state.edit,
              job: action.value,
            },
          };
      }
    }
    case COMMIT_FORM_EDIT: {
      return {
        ...state,
        profile: {
          name: state.edit.FullName || state.profile.name,
          address: state.edit.address || state.profile.address,
          age: state.edit.birthday || state.profile.age,
          job: state.edit.job || state.profile.job,
        },
        shortName: (state.edit.FullName || state.profile.name).split(" ")[0],
        edit: {
          FullName: "",
          address: "",
          birthday: "",
          job: "",
        },
      };
    }
    case ADD_POST: {
      if (state.main.textOfPost === "") return state;

      const post = {
        ava: state.avatar,
        profileName: state.profile.name,
        body: state.main.textOfPost,
        date: "0 sec",
      };

      return {
        ...state,
        main: {
          posts: [post, ...state.main.posts],
          textOfPost: "",
        },
      };
    }
    case CHANGE_ENTRY_FIELD:
      return {
        ...state,
        main: {
          ...state.main,
          textOfPost: action.newText,
        },
      };
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
    case NEW_MESSAGE:
      return {
        ...state,
        messagesPage: {
          ...state.messagesPage,
          newMessage: action.body,
        },
      };
    case SEND_MESSAGE: {
      if (state.messagesPage.newMessage === "") return state;
      const index = state.messagesPage.index;
      const text = state.messagesPage.newMessage;
      const message = {
        identefication: "me",
        body: text,
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
                lastmessage: text,
              },

              dialogs: [...state.messagesPage.messages[index].dialogs, message],
            },
            ...state.messagesPage.messages.slice(+index + 1),
          ],
          newMessage: "",
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

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
    value: value
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
            identefication: 'interlocutor',
            body: "Привет",
          },
          {
            identefication: 'me',
            body: "Привет",
          },
          {
            identefication: 'interlocutor',
            body: "Как дела?",
          },
          {
            identefication: 'me',
            body: "Хорошо",
          },
        ],
      },
      {
        title: {
          ava: "https://www.w3schools.com/w3images/avatar6.png",
          name: "Angie Jane",
          lastmessage: "",
          shortName: "Angie",
        },

        dialogs: [],
      },
      {
        title: {
          ava: "https://www.w3schools.com/w3images/avatar2.png",
          name: "Jane Doe",
          lastmessage: "",
          shortName: "Jane",
        },

        dialogs: [],
      },
      {
        title: {
          ava: "https://www.w3schools.com/w3images/avatar1.png",
          name: "Артур Хуесосов",
          lastmessage: "",
          shortName: "Артут",
        },

        dialogs: [],
      },
    ],
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_EDIT: {
      switch (action.name) {
        case "fullname": {
          state.edit.FullName = action.value;
          break;
        }
        case "address": {
          state.edit.address = action.value;
          break;
        }
        case "birthday": {
          state.edit.birthday = action.value;
          break;
        }
        case "job": {
          state.edit.job = action.value;
          break;
        }
      }
      return state;
    }
    case COMMIT_FORM_EDIT: {
      state.profile.name = state.edit.FullName || state.profile.name;
      state.profile.address = state.edit.address || state.profile.address;
      state.profile.age = state.edit.birthday || state.profile.age;
      state.profile.job = state.edit.job || state.profile.job;
      state.shortName = state.profile.name.split(' ')[0];
      return state;
    }
    case ADD_POST: {
      if (state.main.textOfPost === "") return;

      const post = {
        ava: state.avatar,
        profileName: state.profile.name,
        body: state.main.textOfPost,
        date: "0 sec",
      };

      state.main.posts.unshift(post);
      state.main.textOfPost = "";
      return state;
    }
    case CHANGE_ENTRY_FIELD:
      state.main.textOfPost = action.newText;
      return state;
    case OPEN_MESSAGE: {
      state.messagesPage.isOpen = true;
      state.messagesPage.index = action.index;
      return state;
    }
    case NEW_MESSAGE:
      state.messagesPage.newMessage = action.body;
      return state;
    case SEND_MESSAGE: {
      if (state.messagesPage.newMessage === "") return state;
      const index = state.messagesPage.index;
      const text = state.messagesPage.newMessage;
      const message = {
        identefication: 'me',
        body: text,
      };
      state.messagesPage.messages[index].dialogs.push(message);
      const lastmessage =
        state.messagesPage.messages[index].dialogs.slice(-1)[0].body;
      state.messagesPage.messages[index].title.lastmessage = lastmessage;
      state.messagesPage.newMessage = "";
      return state;
    }
    case CLOSE_MESSAGE: {
      state.messagesPage.isOpen = false;
      state.messagesPage.index = "";
      return state;
    }
    default: {
        return state;
    }
  }
};

export default dataReducer;

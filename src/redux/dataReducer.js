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

  avatar: "https://sun9-21.userapi.com/impg/URis_7zX3Nm3t-wBnTqQ5XQUH5VCIAYpUlV9XQ/cmHhq12O3Ls.jpg?size=483x604&quality=96&sign=a548a3c9cce26b53c8b4a78ad42d507f&c_uniq_tag=js-xaOwuO11YP32bq5Z1Fu1VdQ0xl6j6AZCQYFLVPy4&type=album",

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
  const copyState = JSON.parse(JSON.stringify(state));
  console.log(copyState);
  switch (action.type) {
    case CHANGE_FORM_EDIT: {
      switch (action.name) {
        case "fullname": {
          copyState.edit.FullName = action.value;
          break;
        }
        case "address": {
          copyState.edit.address = action.value;
          break;
        }
        case "birthday": {
          copyState.edit.birthday = action.value;
          break;
        }
        case "job": {
          copyState.edit.job = action.value;
          break;
        }
      }
      return copyState;
    }
    case COMMIT_FORM_EDIT: {
      copyState.profile.name = copyState.edit.FullName || copyState.profile.name;
      copyState.profile.address = copyState.edit.address || copyState.profile.address;
      copyState.profile.age = copyState.edit.birthday || copyState.profile.age;
      copyState.profile.job = copyState.edit.job || copyState.profile.job;
      copyState.shortName = copyState.profile.name.split(" ")[0];
      copyState.edit.FullName = '';
      copyState.edit.address = '';
      copyState.edit.birthday = '';
      copyState.edit.job = '';
      return copyState;
    }
    case ADD_POST: {
      if (copyState.main.textOfPost === "") return copyState;

      const post = {
        ava: copyState.avatar,
        profileName: copyState.profile.name,
        body: copyState.main.textOfPost,
        date: "0 sec",
      };

      copyState.main.posts.unshift(post);
      copyState.main.textOfPost = "";
      return copyState;
    }
    case CHANGE_ENTRY_FIELD:
      copyState.main.textOfPost = action.newText;
      return copyState;
    case OPEN_MESSAGE: {
      copyState.messagesPage.isOpen = true;
      copyState.messagesPage.index = action.index;
      return copyState;
    }
    case NEW_MESSAGE:
      copyState.messagesPage.newMessage = action.body;
      return copyState;
    case SEND_MESSAGE: {
      if (copyState.messagesPage.newMessage === "") return copyState;
      const index = copyState.messagesPage.index;
      const text = copyState.messagesPage.newMessage;
      const message = {
        identefication: "me",
        body: text,
      };
      copyState.messagesPage.messages[index].dialogs.push(message);
      const lastmessage =
        copyState.messagesPage.messages[index].dialogs.slice(-1)[0].body;
      copyState.messagesPage.messages[index].title.lastmessage = lastmessage;
      copyState.messagesPage.newMessage = "";
      return copyState;
    }
    case CLOSE_MESSAGE: {
      copyState.messagesPage.isOpen = false;
      copyState.messagesPage.index = "";
      return copyState;
    }
    default: {
      return copyState;
    }
  }
};

export default dataReducer;

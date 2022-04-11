const OPEN_MESSAGE = "OPEN_MESSAGE";
const NEW_MESSAGE = "NEW_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";
const CLOSE_MESSAGE = "CLOSE_MESSAGE";

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
            name: "Jane",
            ava: "https://www.w3schools.com/w3images/avatar5.png",
            body: "Привет",
          },
          {
            name: "Айназ",
            ava: "https://vk.com/images/camera_200.png",
            body: "Привет",
          },
          {
            name: "Jane",
            ava: "https://www.w3schools.com/w3images/avatar5.png",
            body: "Как дела?",
          },
          {
            name: "Айназ",
            ava: "https://vk.com/images/camera_200.png",
            body: "Хорошо",
          },
        ],
      },
      {
        title: {
          ava: "https://www.w3schools.com/w3images/avatar6.png",
          name: "Angie Jane",
          lastmessage: "",
        },

        dialogs: [],
      },
      {
        title: {
          ava: "https://www.w3schools.com/w3images/avatar2.png",
          name: "Jane Doe",
          lastmessage: "",
        },

        dialogs: [],
      },
      {
        title: {
          ava: "https://www.w3schools.com/w3images/avatar1.png",
          name: "Артур Хуесосов",
          lastmessage: "",
        },

        dialogs: [],
      },
    ],
  },

  shortName: 'Айназ',

  avatar: 'https://vk.com/images/camera_200.png',
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
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
        name: state.shortName,
        ava: state.avatar,
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
    default:
      return state;
  }
};

export default messageReducer;

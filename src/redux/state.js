import mainReducer from "./mainReducer";
import editReducer from "./editReducer";
import messageReducer from "./messageReducer";


const store = {

  _state: {
    profile: {
      name: 'Айназ Давлетшин',
      age: '17 мая 2003',
      job: 'Frontend Developer',
      address: 'Россия, Mосква',
    },

    shortName: 'Айназ',

    main: {
      posts: [
        {
          ava: 'https://www.w3schools.com/w3images/avatar2.png',
          profileName: 'John Doe',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          date: '1 min'
        },
        {
          ava: 'https://www.w3schools.com/w3images/avatar5.png',
          profileName: 'Jane Doe',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          date: '32 min'
        },
        {
          ava: 'https://www.w3schools.com/w3images/avatar6.png',
          profileName: 'Angie Jane',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          date: '1 day'
        },
        {
          ava: 'https://vk.com/images/camera_200.png',
          profileName: 'Ilkhan Davletshin',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          date: '1 day 12 hours'
        }
      ],

      textOfPost: '',
    },

    edit: {
      FullName: '',
      birthday: '',
      address: '',
      job: '',
    },

    avatar: 'https://vk.com/images/camera_200.png',

    messagesPage: {

      isOpen: false,

      index: '',

      newMessage: '',

      messages: [{
        title: {
          ava: 'https://www.w3schools.com/w3images/avatar5.png',
          name: 'Jane Doe',
          lastmessage: 'Хорошо',
          shortName: 'Jane',
        },
  
        dialogs: [
          {
            name: 'Jane',
            ava: 'https://www.w3schools.com/w3images/avatar5.png',
            body: 'Привет'
          },
          {
            name: 'Айназ',
            ava: 'https://vk.com/images/camera_200.png',
            body: 'Привет'
          },
          {
            name: 'Jane',
            ava: 'https://www.w3schools.com/w3images/avatar5.png',
            body: 'Как дела?'
          },
          {
            name: 'Айназ',
            ava: 'https://vk.com/images/camera_200.png',
            body: 'Хорошо'
          },

        ]
      },
      {
        title: {
          ava: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Angie Jane',
          lastmessage: ''
        },
  
        dialogs: []
      },
      {
        title: {
          ava: 'https://www.w3schools.com/w3images/avatar2.png',
          name: 'Jane Doe',
          lastmessage: ''
        },
  
        dialogs: []
      },
      {
        title: {
          ava: 'https://www.w3schools.com/w3images/avatar1.png',
          name: 'Артур Хуесосов',
          lastmessage: ''
        },
  
        dialogs: []
      },
      ]
    },

  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._render = observer;
  },

  dispatch(action) {
    this._state.main = mainReducer(this._state, action);
    this._state.messagesPage = messageReducer(this._state, action);
    this._state = editReducer(this._state, action);
    this._render();
  }

}

export default store;
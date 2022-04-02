
const store = {

  _state: {
    profile: {
      name: 'Айназ Давлетшин',
      age: '17 мая 2003',
      job: 'Frontend Developer',
      address: 'Россия, Mосква',
    },

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

    avatar: 'https://vk.com/images/camera_200.png',
  },

  getState() {
    return this._state
  },

  addPost() {
    if(this._state.main.textOfPost === '') return;

    const post = {
      ava: this._state.avatar,
      profileName: this._state.profile.name,
      body: this._state.main.textOfPost,
      date: '0 sec',
    }

    this._state.main.posts.unshift(post);
    this._render();
  },

  changeEntryField(newText) {
    this._state.main.textOfPost = newText;
    this._render();
  },

  subscribe(observer) {
    this._render = observer;
  }

}

export default store;
const ADD_POST = 'ADD_POST';
const CHANGE_ENTRY_FIELD = 'CHANGE_ENTRY_FIELD';
const CHANGE_FORM_EDIT = 'CHANGE_FORM_EDIT';
const COMMIT_FORM_EDIT = 'COMMIT_FORM_EDIT';


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

    edit: {
      FullName: '',
      birthday: '',
      address: '',
      job: '',
    },

    avatar: 'https://vk.com/images/camera_200.png',
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._render = observer;
  },

  _addPost() {
    if(this._state.main.textOfPost === '') return;

    const post = {
      ava: this._state.avatar,
      profileName: this._state.profile.name,
      body: this._state.main.textOfPost,
      date: '0 sec',
    }

    this._state.main.posts.unshift(post);
    this._state.main.textOfPost = '';
    this._render();
  },

  _changeEntryField(newText) {
    this._state.main.textOfPost = newText;
    this._render();
  },

  _changeFormEdit(name, value) {
    switch (name) {
      case 'fullname': {
        this._state.edit.FullName = value;
        break;
      }
      case 'address': {
        this._state.edit.address = value;
        break;
      }
      case 'birthday': {
        this._state.edit.birthday = value;
        break;
      }
      case 'job': {
        this._state.edit.job = value;
        break;
      }
    }
    this._render();
  },

  _commitFormEdit() {
    this._state.profile.name = this._state.edit.FullName || this._state.profile.name;
    this._state.profile.address = this._state.edit.address || this._state.profile.address;
    this._state.profile.age = this._state.edit.birthday || this._state.profile.age;
    this._state.profile.job = this._state.edit.job || this._state.profile.job;
    this._render();
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST: 
        this._addPost();
        break;
      case CHANGE_ENTRY_FIELD:
        this._changeEntryField(action.newText);
        break;
      case CHANGE_FORM_EDIT:
        this._changeFormEdit(action.name, action.value);
        break;
      case COMMIT_FORM_EDIT:
        this._commitFormEdit();
        break;
    }
  }

}

export const addPostActionCreate = () => ({ type: ADD_POST });

export const changeEntryActionCreate = (text) => ({
  type: CHANGE_ENTRY_FIELD,
  newText: text,
})

export const changeFormActionCreate = (name, value) => ({
  type: CHANGE_FORM_EDIT,
  name: name,
  value: value
})

export const commitFormActionCreate = () => ({ type: COMMIT_FORM_EDIT })

export default store;

const state = {
    profile: {
      name: 'Айназ Давлетшин',
      age: '17 мая 2003',
      job: 'Frontend Developer',
      address: 'Россия, Mосква',
    },

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

    avatar: 'https://vk.com/images/camera_200.png',
}

export const addPost = (postText) => {
  const post = {
    ava: state.avatar,
    profileName: state.profile.name,
    body: postText,
    date: '0 sec',
  }

  state.posts.unshift(post);
}

export default state;
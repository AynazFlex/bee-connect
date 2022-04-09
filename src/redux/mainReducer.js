const ADD_POST = 'ADD_POST';
const CHANGE_ENTRY_FIELD = 'CHANGE_ENTRY_FIELD';


export const addPostActionCreate = () => ({ type: ADD_POST });

export const changeEntryActionCreate = (text) => ({
  type: CHANGE_ENTRY_FIELD,
  newText: text,
});


const mainReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST: {
            if(state.main.textOfPost === '') return;
    
            const post = {
                ava: state.avatar,
                profileName: state.profile.name,
                body: state.main.textOfPost,
                date: '0 sec',
            }
    
            state.main.posts.unshift(post);
            state.main.textOfPost = '';
            return state.main;
        }
        case CHANGE_ENTRY_FIELD:
            state.main.textOfPost = action.newText;
            return state.main;
        default: 
            return state.main;
    }

}

export default mainReducer;
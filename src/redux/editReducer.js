const CHANGE_FORM_EDIT = 'CHANGE_FORM_EDIT';
const COMMIT_FORM_EDIT = 'COMMIT_FORM_EDIT';


export const changeFormActionCreate = (name, value) => ({
    type: CHANGE_FORM_EDIT,
    name: name,
    value: value
});
  
export const commitFormActionCreate = () => ({ type: COMMIT_FORM_EDIT });


const editReduser = (state, action) => {
    switch (action.type) {
        case CHANGE_FORM_EDIT: {
            switch (action.name) {
                case 'fullname': {
                  state.edit.FullName = action.value;
                  break;
                }
                case 'address': {
                  state.edit.address = action.value;
                  break;
                }
                case 'birthday': {
                  state.edit.birthday = action.value;
                  break;
                }
                case 'job': {
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
            return state;
        }
        default:
            return state;
    }
}


export default editReduser;
const SET_PROFILE = "SET-PROFILE";

export const setProfile = (profile) => ({type: SET_PROFILE, profile});


const initialState = {
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}


export default profileReducer;
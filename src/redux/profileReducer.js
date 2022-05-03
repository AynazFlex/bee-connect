import Api from "../api/api";

const SET_PROFILE = "SET-PROFILE";

export const setProfile = (profile) => ({type: SET_PROFILE, profile});

export const getProfile = (userId) => (dispatch) => {
    Api.getProfile(userId).then((data) => dispatch(setProfile(data)));
};

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
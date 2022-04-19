const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';

export const FollowUnfollowActionCreat = (userId) => ({
    type: FOLLOW_UNFOLLOW,
    userId: userId,
})


const initialState = {
    users: [
        {
            id: 14531, 
            FullName: 'Айгиз Шагиморданов',
            avatar: 'https://sun1-91.userapi.com/s/v1/ig2/KSbGUiK3EgwPCQrDnMA96K6pR8aSDZ0PadCBazmFsOiJnw2nhdhrzjJFKRNs2fMPsPHNhVCrbo_-j_JvVfOYjj9F.jpg?size=200x200&quality=96&crop=0,0,1436,1436&ava=1',
            locations: 'Россия, Москва',
            birthday: '24 февраля 2000',
            followed: true,
        },
        {
            id: 2345754, 
            FullName: 'Иван Смирнов',
            avatar: 'https://sun1-91.userapi.com/s/v1/ig2/KSbGUiK3EgwPCQrDnMA96K6pR8aSDZ0PadCBazmFsOiJnw2nhdhrzjJFKRNs2fMPsPHNhVCrbo_-j_JvVfOYjj9F.jpg?size=200x200&quality=96&crop=0,0,1436,1436&ava=1',
            locations: 'Россия, Москва',
            birthday: '1 марта 1999',
            followed: false,
        },
        {
            id: 35425, 
            FullName: 'Юлия Сайфуллина',
            avatar: 'https://sun1-27.userapi.com/s/v1/ig2/S21NhLl2z9BfJ_CYuOMz1cLWqvyFgC98ZK2xy7gL40QKqDkHX2Vt2t9tns-1LcPE-_n4cFCP0f9qfkJKiZZ7BrqJ.jpg?size=200x200&quality=96&crop=0,104,1435,1435&ava=1',
            locations: 'Россия, Зеленоград',
            birthday: '13 июля 1999',
            followed: false,
        },
        {
            id: 453403, 
            FullName: 'Диман Братан',
            avatar: 'https://sun1-91.userapi.com/s/v1/ig2/KSbGUiK3EgwPCQrDnMA96K6pR8aSDZ0PadCBazmFsOiJnw2nhdhrzjJFKRNs2fMPsPHNhVCrbo_-j_JvVfOYjj9F.jpg?size=200x200&quality=96&crop=0,0,1436,1436&ava=1',
            locations: 'Россия, Москва',
            birthday: '13 мая 2001',
            followed: true,
        },
        {
            id: 545345,
            FullName: 'Айнур Ахметов',
            avatar: 'https://sun1-91.userapi.com/s/v1/ig2/KSbGUiK3EgwPCQrDnMA96K6pR8aSDZ0PadCBazmFsOiJnw2nhdhrzjJFKRNs2fMPsPHNhVCrbo_-j_JvVfOYjj9F.jpg?size=200x200&quality=96&crop=0,0,1436,1436&ava=1',
            locations: 'Россия, Уфа',
            birthday: '5 июня 1995',
            followed: false,
        },
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW: {
            return {
                users: state.users.map(user => action.userId === user.id ? {...user, followed: !user.followed} : user)
            }
        }
        default: 
            return state;
    }
}

export default usersReducer;
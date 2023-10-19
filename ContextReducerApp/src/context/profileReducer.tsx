import { ProfileState } from "./profileContext";

type ProfileAction =
    { type: "reset" }
    | { type: "changeProfile"; name: string; img: string };


export const profileReducer = (state: ProfileState, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case 'reset':
            return {
                ...state,
                fullname: '- - - -',
                imgUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }

        case 'changeProfile':
            return {
                ...state,
                fullname: action.name,
                imgUrl: action.img
            }

        default:
            return state;
    }

}
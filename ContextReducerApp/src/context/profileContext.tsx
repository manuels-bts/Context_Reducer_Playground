import { createContext, useReducer } from "react";
import { profileReducer } from "./profileReducer";


export interface ProfileState {
    imgUrl: string;
    fullname: string;
}

export const profileInitialState: ProfileState = {
    imgUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    fullname: '- - - -'
};

export interface ProfileContextProps {
    state: ProfileState;
    reset: () => void;
    changeProfile: (username: string, imageUrl: string) => void;
}

export const ProfileContext = createContext({} as ProfileContextProps);

export const ProfileProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(profileReducer, profileInitialState)

    const reset = () => {
        dispatch({ type: 'reset' })
    }

    const changeProfile = (username: string, imageUrl: string) => {
        dispatch({
            type: 'changeProfile',
            name: username,
            img: imageUrl
        })
    }

    return (
        <ProfileContext.Provider
            value={{
                state,
                reset,
                changeProfile
            }}>
            {children}
        </ProfileContext.Provider>
    );
}
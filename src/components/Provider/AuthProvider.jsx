import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    // create a user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }

    // display user photo
    const userProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const authInfo = {
      createUser,
      userProfile,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
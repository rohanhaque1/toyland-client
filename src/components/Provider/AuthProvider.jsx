import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
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

    // signin a user with eemail and password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
      createUser,
      userProfile,
      signInUser,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
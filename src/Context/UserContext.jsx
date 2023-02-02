import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile} from 'firebase/auth'
import app from '../Config.firebase/firebase.config';


export const UserAuth = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    
    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }
    const updateUserPassword = (email) => {
        setLoading(true);
       return sendPasswordResetEmail(auth, email)

    }
    const verifyUser = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }



    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const userInfo= {
        user,
        setUser,
        createUser,
        logInUser,
        googleLogIn,
        logOutUser, 
        loading,
        setLoading,
        githubLogIn,
        updateUserProfile,
        updateUserPassword,
        verifyUser
    }
    return (
        <UserAuth.Provider value={userInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default UserContext;
// lib/useFirebaseAuth.jsx
import { useState, useEffect } from 'react'

import {
    onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";


import { auth } from '../config'

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
});

export const useFirebaseAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authStateChanged = async (authState) => {
        if (!authState) {
            setLoading(false)
            return;
        }

        setLoading(true)

        var formattedUser = formatAuthUser(authState);

        setUser(formattedUser);

        setLoading(false);

    };


    const onAuthStateChanged = (cb) => {
        return _onAuthStateChanged(auth, cb);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        user,
        loading
    };
}
/* eslint-disable @typescript-eslint/no-explicit-any */

import { auth } from '@/lib/firebase/config'
import { onAuthStateChanged} from 'firebase/auth'
import React, { createContext, useState } from 'react'


export const firebaseAuthContext = createContext({})

export default function FirebaseAuthProvider({ children }) {
    const [user, setUser] = useState()
    onAuthStateChanged(auth, (user) => {
        console.log("provider: ", user)
        setUser(user || undefined)
    })
    return (
        <firebaseAuthContext.Provider value={user}>{children}</firebaseAuthContext.Provider>
    )
}

"use client"

import { auth } from '@/lib/firebase/config'
import { signOut } from 'firebase/auth'
import React, { useEffect } from 'react'

export default function Page() {
    useEffect(()=> {
        signOut(auth)
    }, [])
    return (
        <div>page</div>
    )
}

"use client"

import { auth } from '@/lib/firebase/config'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React from 'react'
import { GoogleLoginButton } from 'react-social-login-buttons'

export default function SocialAuth() {
    const router = useRouter()
    const handleSignIn = async () => {
        const provider = new GoogleAuthProvider()
        const res = await signInWithPopup(auth, provider)
        console.log(res)
        router.push("/")
    }
    return (
        <div className='my-4'>
            <p className='text-center font-bold mb-4' >Or</p>
            <GoogleLoginButton onClick={handleSignIn} style={{display: "flex", justifyContent: "center"}} />
        </div>
    )
}

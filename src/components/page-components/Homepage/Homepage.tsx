import React from 'react'
import Features from "./Featuers";
import Workflows from "./WorkFlow";
import HeroHome from "./HeroSection";

export default function Homepage() {
    return (
        <>
            <HeroHome />
            <Workflows />
            <Features />
        </>
    )
}

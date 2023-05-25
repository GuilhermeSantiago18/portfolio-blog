import React from 'react'
import AboutMe from './AboutMe'
import Depoiments from './Depoiments'
import StaticDepoiments from './StaticDepoiments'

export default function HomePage() {
    return (
        <main>
            <AboutMe />
            <StaticDepoiments />
            <Depoiments />
        </main>
    )
}

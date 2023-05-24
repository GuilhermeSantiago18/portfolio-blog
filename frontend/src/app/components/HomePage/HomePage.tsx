import Contact from './Contact'
import React from 'react'
import AboutMe from './AboutMe'
import Depoiments from './Depoiments'
import Footer from './Footer'
import StaticDepoiments from './StaticDepoiments'

export default function HomePage() {
    return (
        <div>
            <AboutMe />
            <StaticDepoiments />
            <Depoiments />
            <Contact />
            <Footer />
        </div>
    )
}

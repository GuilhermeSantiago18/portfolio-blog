import React from 'react'
import AboutMe from './AboutMe'
import Depoiments from './Depoiments'
import StaticDepoiments from './StaticDepoiments'
import { GenericSection } from '@/app/blog/components'
import { mockPosts } from '@/app/blog/mock/data'

export default function HomePage() {
    return (
        <main>
            <AboutMe />
            <div className="h-screen">
                <StaticDepoiments />
                <Depoiments />
            </div>
            <div className='p-2'>
            <GenericSection sectionName='Posts Recentes' posts={mockPosts.slice(0,3)} />
            </div>
        </main>
    )
}

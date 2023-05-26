import React from 'react'
import { BlogNav, FeaturedPosts, GenericSection, Subscribe } from './components'
import { mockPosts } from './mock/data'



export default function Blog() {
  return (
    <div
      className="max-w-screen-xl mx-auto"
    >
        <BlogNav />
        <main className="mt-12">
          <FeaturedPosts />
          <GenericSection sectionName='Posts recentes' posts={mockPosts.slice(2)} />
          <Subscribe />
          <GenericSection sectionName='Mais vistos' posts={mockPosts.slice(0,3)} />
        </main>
      </div>
  )
}

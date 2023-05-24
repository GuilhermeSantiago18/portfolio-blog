import React from 'react'
import { BlogNav, FeaturedPosts, GenericSection, Subscribe } from './components'

const recentPosts = [{
  id: 1,
  title: 'Put all speaking her delicate recurred possible.',
  description: 'Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.',
  image: '/mockblog.jpg'
}, {
  id: 2,
  title: 'Put all speaking her delicate recurred possible.',
  description: 'Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.',
  image: '/mockblog.jpg'
}, {
  id: 3,
  title: 'Put all speaking her delicate recurred possible.',
  description: 'Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.',
  image: '/mockblog.jpg'
}
]

const featuredPosts = [{
  id: 1,
  title: 'Put all speaking her delicate recurred possible.',
  description: 'Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.',
  image: '/mockblog.jpg'
}, {
  id: 2,
  title: 'Put all speaking her delicate recurred possible.',
  description: 'Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.',
  image: '/mockblog.jpg'
}, {
  id: 3,
  title: 'Put all speaking her delicate recurred possible.',
  description: 'Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.',
  image: '/mockblog.jpg'
}]

export default function Blog() {
  return (
    <div className="max-w-screen-xl mx-auto">
        <BlogNav />
        <main className="mt-12">
          <FeaturedPosts />
          <GenericSection sectionName='Posts recentes' posts={recentPosts} />
          <Subscribe />
          <GenericSection sectionName='Mais vistos' posts={featuredPosts} />
        </main>
      </div>
  )
}

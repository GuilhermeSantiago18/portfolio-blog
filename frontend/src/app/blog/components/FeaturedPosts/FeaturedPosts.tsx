import FirstPost from './FirstPost';
import SubPosts from './SubPosts';

const featuredPostsMock = [
  {
    id: 1,
    title: 'Put all speaking her delicate recurred possible.',
    description: 'Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.',
    image: '/mockblog.jpg',
    category: 'Technology'
  }, {
    id: 2,
    title: 'Put all speaking her delicate recurred possible.',
    description: 'Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.',
    image: '/mockblog.jpg',
    category: 'Technology'

  }, {
    id: 3,
    title: 'Put all speaking her delicate recurred possible.',
    description: 'Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.',
    image: '/mockblog.jpg',
    category: 'Technology'
  },
  {
    id: 4,
    title: 'Put all speaking her delicate recurred possible.',
    description: 'Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.',
    image: '/mockblog.jpg',
    category: 'Technology'
  }, {
    id: 5,
    title: 'Put all speaking her delicate recurred possible.',
    description: 'Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.',
    image: '/mockblog.jpg',
    category: 'Technology'
  }
]

export default function FeaturedPosts() {
  return (
           <div className="flex flex-wrap md:flex-no-wrap w-full space-x-0 md:space-x-6 mb-16">
            <FirstPost post={featuredPostsMock[0]} />
            <div className="w-full md:w-2/5">
              {featuredPostsMock.slice(1).map(post => (<SubPosts key={'featured' + post.title} post={post} />)) }
            </div>
         </div>

    )
}

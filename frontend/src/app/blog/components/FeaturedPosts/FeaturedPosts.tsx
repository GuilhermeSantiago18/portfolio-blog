import { mockPosts } from '../../mock/data';
import FirstPost from './FirstPost';
import SubPosts from './SubPosts';


export default function FeaturedPosts() {
  return (
    <div className="flex flex-wrap md:flex-no-wrap w-full space-x-0 md:space-x-6 mb-16 justify-center">
      <FirstPost post={mockPosts[0]} />
      <div className="w-full md:w-2/5">
        {mockPosts.slice(1).map(post => (<SubPosts key={'featured' + post.title} post={post} />)) }
      </div>
    </div>
    )
}

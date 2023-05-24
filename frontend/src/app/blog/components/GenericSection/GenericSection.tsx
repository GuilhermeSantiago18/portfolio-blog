import { PostType } from '../../types/Post';
import Post from './Post';


type Props = {
  sectionName: string;
  posts: PostType[]
}

export default function GenericSection({sectionName, posts}: Props) {
  return (
    <div>
     <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
     <h2 className="font-bold text-3xl">{sectionName}</h2>
     <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
       View all
     </a>
   </div>
    <div className="block space-x-0 lg:flex lg:space-x-6">
      {posts.map((post) => ( <Post key={post.id} post={post} />))}
    </div>
   </div>
  )
}

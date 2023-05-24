import Image from 'next/image';
import { PostType } from '../../types/Post';
import Link from 'next/link';

type Props = {
  post: PostType
}

export default function Post({post}: Props ) {
  return(
    <div className="rounded w-full lg:w-1/2 p-4 lg:p-0">
    <Image width={100} height={100} alt ='ssrs' src={post.image}  className="rounded" />
    <div className="p-4 pl-0">
      <h2 className="font-bold text-2xl text-gray-800">{post.title}</h2>
      <p className="text-gray-700 mt-2">
        {post.description}
      </p>
      <Link href={`/blogs/${post.id}`} className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Leia mais </Link>
    </div>
  </div>
  )
}
import { PostType } from '../../types/Post';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

type Props = {
  post: PostType
}

export default function Post({post}: Props ) {
  return(
    <div className="rounded w-full lg:w-1/2 p-4 lg:p-0">
    <CustomImage alt ='ssrs' src={post.image} className="rounded w-full h-64 relative" />
    <div className="p-4 pl-0">
      <h2 className="font-bold text-2xl text-th-secondary">{post.title}</h2>
      <p className="text-th-text-color mt-2">
        {post.description}
      </p>
      <Link
        href={`/blogs/${post.id}`}
        className="inline-block p-1 rounded text-th-secondary hover:bg-th-secondary hover:text-th-background mt-2 ml-auto"
      >
      Leia mais
      </Link>
    </div>
  </div>
  )
}


import CustomImage from '@/components/CustomImage';
import { PostType } from '../../types/Post';
import Link from 'next/link';

type Props ={
  post: PostType
}

export default function SubPosts({post}:Props) {
  return(
    <div className="rounded w-full flex flex-col md:flex-row mb-4 px-2 py-1 bg-th-secondary">
      <CustomImage alt='asa' src={post.image} className="block md:hidden lg:block rounded-md self-center w-full md:w-32 h-64 md:h-32 relative" />
      <div className="bg-th-secondary rounded p-2">
        <span className="text-th-primary text-sm hidden md:block">{post.category}</span>
        <div className="md:mt-0 text-th-background font-semibold text-xl mb-2">
          {post.title}
        </div>
        <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-th-background">
          {post.description}
        </p>
        <Link href={`/blogs/${post.id}`} className="inline-block px-3 py-2 my-1 rounded-md bg-th-background text-th-secondary hover:bg-th-primary hover:text-white">
          Ler mais
        </Link>
      </div>
    </div>
)
}

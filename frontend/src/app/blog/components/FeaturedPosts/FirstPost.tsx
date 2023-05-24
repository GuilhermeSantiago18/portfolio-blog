import { PostType } from '../../types/Post'
import Link from 'next/link'
import CustomImage from '@/app/components/CustomImage'

type Props ={
  post: PostType
}

export default function FirstPost({post}: Props) {
  return(
  <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-2/5 relative rounded block">
      <CustomImage src={post.image} alt='img' className="rounded-md w-full h-64 relative" />
      <span className="text-green-700 text-sm hidden md:block mt-4"> {post.category} </span>
      <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
          {post.title}
      </h1>
      <p className="text-gray-600 mb-4">
       {post.description}
      </p>
      <Link  href={`/blogs/${post.id}`} className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
        Ler mais
      </Link>
  </div>)
}

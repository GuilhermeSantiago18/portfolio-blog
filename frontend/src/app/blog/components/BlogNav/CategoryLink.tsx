
type Props = {
  content: string
}

export default function CategoryLink({content}: Props) {
  return (
    <li className="px-2 md:px-4">
      <p className= "font-semibold hover:text-th-primary"> {content} </p>
    </li>
  )
}
import Link from 'next/link';

type Props = {
    name: string;
    to: string;
}

export default function NavLink({name,to}: Props) {
  return (
    <li className="text-th-primary text-base md:text-xl font-bold md:font-medium">
    <Link href={to}>
      {name}
    </Link>
  </li>
  )
}
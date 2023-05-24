import Link from 'next/link';

type Props = {
    name: string;
    to: string;
}

export default function NavLink({name,to}: Props) {
  return (
    <li className="bg-th-primary">
    <Link href={to}>
      {name}
    </Link>
  </li>
  )
}
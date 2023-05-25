import NavLink from './NavLink';

type Props = {
  pages: {name: string, to: string, offseat: number}[]
}

export default function NavMenu({pages}: Props) {
  return (
    <nav className='hidden md:block'>
    <ul className="items-center justify-center md:flex md:space-x-6 md:space-y-0 ">
      {pages.map(({name, to, offseat}) => <NavLink key={name} name={name} to={to} offseat={offseat}/>)}
    </ul>
  </nav>
  )
}
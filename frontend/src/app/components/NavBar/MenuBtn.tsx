import { MenuIcon, XIcon } from 'lucide-react';

type Props = {
  open: boolean;
  handleOpenMenu: () => void;
  passRef: any;
}

export default function MenuBtn({open, handleOpenMenu, passRef}:Props) {
  return (
    <button
    ref={passRef}
    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:hidden"
    onClick={handleOpenMenu}
  >
    {open ? <XIcon className='text-yellow-800' />  : <MenuIcon className='text-yellow-800' /> }
  </button>
  )
}
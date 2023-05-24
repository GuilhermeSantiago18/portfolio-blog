import { MenuIcon, XIcon } from 'lucide-react';
import { RefObject } from 'react';

type Props = {
  open: boolean;
  handleOpenMenu: () => void;
  passRef: RefObject<HTMLButtonElement> | RefObject<HTMLButtonElement>;
}

export default function MenuBtn({open, handleOpenMenu, passRef}:Props) {
  return (
    <button
    ref={passRef}
    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:hidden"
    onClick={handleOpenMenu}
  >
    {open ? <XIcon className='text-th-primary' />  : <MenuIcon className='text-th-primary' /> }
  </button>
  )
}

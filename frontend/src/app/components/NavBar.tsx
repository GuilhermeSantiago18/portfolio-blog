"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import DarkModeBtn from './DarkModeBtn';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Spinner from './Spinner';
import { MenuIcon } from 'lucide-react'

type Props = {
  to: string
  children: React.ReactNode
}

function NavLink({to, children}: Props) {
  return <a href={to} className={`mx-4`}>
      {children}
  </a>
}

type mProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileNav({open, setOpen}: mProps) {
  return (
      <div className={`absolute top-0 left-0 h-screen w-screen  transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
          <div className="flex flex-col ml-4">
              <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                  About
              </a>
              <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                  Contact
              </a>
          </div>  
      </div>
  )
}


const links = [{
  title: 'Home',
  to: '/'
},
{
  title: 'Blog',
  to: '/blog'
}
]

export default function NavBar() {
  const [mounted, setMounted] = useState(false)
	const { systemTheme, theme } = useTheme()
  const [open, setOpen] = useState(false)


	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <Spinner size={6} />
	}

	const currentTheme = theme === "system" ? systemTheme : theme

  return (
      <header className='relative flex w-full items-center justify-between py-2 lg:px-3 sm:px-1'>
        <Image src={ currentTheme === 'dark' ? 'potirawhite.svg' : '/potira.svg'} alt="logo" width={170} height={70} />

        <nav className="flex filter drop-shadow-md px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-9/12 flex justify-end items-center">

                <div className="md:hidden">
                    {/* hamburger button */}
                   <button type='button' onClick={() => setOpen(true)}>
                    <MenuIcon />
                   </button>
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                </div>
            </div>
        </nav>
    
        {/* <DarkModeBtn /> */}
        </header>
  );
}

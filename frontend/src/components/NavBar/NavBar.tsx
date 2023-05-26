"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import NavMenu from './NavMenu';
import Dropdown from './DropDown';
import Spinner from '../Spinner';
import DarkModeBtn from './DarkModeBtn';

const pages = [
  {
    name: "Home",
    to: "/",
    offseat: 0,
  },
  {
    name: "Blog",
    to: "/blog",
    offseat: 0,
  },
  {
    name: "About",
    to: "aboutSection",
    offseat: 0,
  },
  {
    name: "Contact",
    to: "contactSection",
    offseat: 0
  },
]

export default function NavBar() {
  const { systemTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>();


  useEffect(() =>{
    const newCurrentTheme = theme === "system"? systemTheme : theme;
    setCurrentTheme(newCurrentTheme);
  },[systemTheme, theme])

    return (
        <header className="w-full bg-th-secondary justify-between px-4 mx-auto h-20">
          <section className="flex items-center justify-between py-2 w-full">
            {/* { currentTheme === undefined
            ? <Spinner size={6} />
            : ( */}
            <Link href="/">
              <Image src={currentTheme === "dark" ? "/potira.svg" : "/potirawhite.svg"} alt={"Potira"} width={170} height={70} />
            </Link>
            {/* )} */}

            <NavMenu pages={pages} />
            <article className='flex items-center'>
              <Dropdown pages={pages} />
              <DarkModeBtn />
            </article>
          </section>
        </header>
    );
  }

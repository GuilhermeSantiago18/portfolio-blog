"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import DarkModeBtn from "../DarkModeBtn";
import Image from "next/image";
import { useTheme } from "next-themes";
import Spinner from "../Spinner";
import NavMenu from './NavMenu';
import Dropdown from './DropDown';

const pages = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Blog",
    to: "/blog",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Contact",
    to: "/contact",
  }
]


export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Spinner size={6} />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <header className="w-full bg-th-secondary justify-between px-4 mx-auto">
            <section className="flex items-center justify-between py-2  w-full">
              <Link href="/">
                <Image src={currentTheme === "dark" ? "/potira.svg" : "/potirawhite.svg"} alt={"Potira"} width={170} height={70} />
              </Link>
              <NavMenu pages={pages} />
              <article className='flex items-center'>
                <Dropdown pages={pages} />
                <DarkModeBtn />
              </article>
            </section>
        </header>
    );
  }

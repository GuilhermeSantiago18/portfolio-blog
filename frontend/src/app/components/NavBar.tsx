"use client";

import Link from "next/link";
import React, { useContext } from "react";
import DarkModeBtn from './DarkModeBtn';

export default function NavBar() {

  return (
      <div>
        <Link href="/">
          Home
        </Link>
        
        <Link href="/blog">
          Blog
        </Link>

        <DarkModeBtn />
        </div>
  );
}

"use client";

import { GlobalContext } from "@/context/global/global";
import Link from "next/link";
import React, { useContext } from "react";

export default function Home() {
  const { disabled, setDisabled } = useContext(GlobalContext);

  const handleClick = () => {
    setDisabled(!disabled);
  };
  return (
    <>
   
      <Link href="/blog">
        <h2>Home</h2>
      </Link>
      <button onClick={handleClick}>Boolean</button>
      {disabled ? <p>Context Ok</p> : null}
    </>
  );
}

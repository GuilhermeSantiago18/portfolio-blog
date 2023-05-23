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
        <div className="container"></div>
      </Link>
      <h2 className="bg-red-600">Home</h2>
      <button onClick={handleClick} className="container">Boolean</button>
      {disabled ? <p>Context Ok</p> : null}
    </>
  );
}

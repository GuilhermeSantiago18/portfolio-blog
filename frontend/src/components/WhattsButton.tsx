import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WhattsButton() {
    return (
        <Link href="https://api.whatsapp.com/send?phone=55084987990420" 
        className="fixed bottom-4 right-2 z-10 flex items-center justify-center w-10 h-10 p-1
         bg-white rounded-full shadow-lg cursor-pointer hover:bg-green-400">
            <Image src={'/socialIcons/whatsapp.svg'} width={30} height={30} alt="Whatsapp"/>
        </Link>
    )
}

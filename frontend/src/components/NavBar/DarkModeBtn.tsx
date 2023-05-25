"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from 'lucide-react'
import Spinner from '../Spinner'

const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false)
	const { systemTheme, theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <Spinner size={6} />
	}

	const currentTheme = theme === "system" ? systemTheme : theme

	return (
		<div>
			{currentTheme === "dark" ? (
				<button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'	onClick={() => {
						setTheme("light")
					}}>
				<MoonIcon
					className="h-6 w-6 cursor-pointer text-th-primary"
				/>
				</button>
			) : (
				<button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'	onClick={() => {
					setTheme("dark")
				}}>
				<SunIcon
					className="h-6 w-6 cursor-pointer text-th-primary"
					onClick={() => {
						setTheme("dark")
					}}
				/>
				</button>
			)}
		</div>
	)
}
export default DarkModeBtn

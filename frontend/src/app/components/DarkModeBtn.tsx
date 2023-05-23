"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from 'lucide-react'

const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false)
	const { systemTheme, theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const currentTheme = theme === "system" ? systemTheme : theme

	return (
		<div>
			{currentTheme === "dark" ? (
				<MoonIcon
					className="h-6 w-6 cursor-pointer"
					onClick={() => {
						setTheme("light")
					}}
				/>
			) : (
				<SunIcon
					className="h-6 w-6 cursor-pointer"
					onClick={() => {
						setTheme("dark")
					}}
				/>
			)}
		</div>
	)
}
export default DarkModeBtn
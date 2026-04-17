"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"


import MoonLogo from '@/../public/moon.svg';
import SunLogo from '@/../public/sun.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState, useEffect } from 'react'


export default function ThemeToggleButton() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null; // Prevents rendering during SSR, avoiding the mismatch
	}
	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-indigo-700 p-2 rounded-full cursor-pointer">
			{
				theme === "dark" ? <Image loading="eager" src={MoonLogo} alt="moon icon" /> :
					<Image loading="eager" src={SunLogo} alt="light theme icon" />}
		</button>
	)
}

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
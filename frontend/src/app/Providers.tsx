"use client"
import { GlobalProvider } from '@/context/global/global'
import { ThemeProvider } from "next-themes"

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider enableSystem={true}>
      <GlobalProvider>
			  {children}
      </GlobalProvider>
		</ThemeProvider>
	)
}

export default Providers
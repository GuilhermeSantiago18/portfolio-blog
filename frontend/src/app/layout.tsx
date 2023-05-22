import { GlobalProvider } from "@/context/global/global"
import { ReactNode } from "react"


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
        {children}
        </GlobalProvider>
        </body>
    </html>
  )
}

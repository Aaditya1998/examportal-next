import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import { SessionProvider } from "next-auth/react"
import {auth} from '@/auth'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
interface RootLayoutProps {
  children: React.ReactNode
}
export default async function RootLayout({ children ,}: RootLayoutProps) {
const  session = await auth();
  return (
    <SessionProvider session={session}>
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster/>
      {children}
     </ThemeProvider>
      </body>
    </html>
    </SessionProvider>
  )
}

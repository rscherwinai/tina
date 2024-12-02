import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NavBar } from "@/components/nav-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "B2B Tracks - Fueling B2B Revenue Engines",
  description: "B2B Tracks helps organizations maximize innovation's impact through go-to-market strategy, execution, and messaging expertise.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <NavBar />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


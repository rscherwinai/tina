"use client"
import { DesktopNav, MobileNav } from "./navigation"
import Image from "next/image"
import Link from "next/link"

export function NavBar() {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="B2B Tracks"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  )
} 
"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { navigationItems } from "@/config/navigation"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="B2B Tracks"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index}>Desktop Item</div>
            ))}
          </div>

          {/* Test Mobile Elements */}
          <div className="md:hidden">
            <div className="bg-red-500 p-4 text-white">
              MOBILE TEST
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-blue-500 p-4 text-white">
              DESKTOP TEST
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 
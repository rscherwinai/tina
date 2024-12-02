"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

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
            <Link href="/" className="text-gray-700 hover:text-brand-primary">
              Home
            </Link>
            <Link href="/keynote-speaking" className="text-gray-700 hover:text-brand-primary">
              Keynote Speaking
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-brand-primary">
                Offerings
              </button>
              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <Link href="/offerings/go-to-market-leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Go-To-Market Leadership
                </Link>
                <Link href="/offerings/message-audit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Message Audit
                </Link>
              </div>
            </div>
            <Link href="/thought-leadership" className="text-gray-700 hover:text-brand-primary">
              Thought Leadership
            </Link>
            <Link 
              href="/schedule"
              className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-primary/90"
            >
              Schedule Time With Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden p-2 bg-gray-100 rounded-md"
          >
            <svg 
              className="h-6 w-6 text-gray-700" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Home
            </Link>
            <Link 
              href="/keynote-speaking"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Keynote Speaking
            </Link>
            <Link 
              href="/offerings/go-to-market-leadership"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Go-To-Market Leadership
            </Link>
            <Link 
              href="/offerings/message-audit"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Message Audit
            </Link>
            <Link 
              href="/thought-leadership"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Thought Leadership
            </Link>
            <Link 
              href="/schedule"
              className="block px-3 py-2 bg-brand-primary text-white rounded-md"
            >
              Schedule Time With Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 
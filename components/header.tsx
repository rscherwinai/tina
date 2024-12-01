import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { navigationMenus } from "@/config/navigation"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="B2B Tracks"
              width={180}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-[#4052B5]"
            >
              Home
            </Link>
            <Link 
              href="/keynote-speaking" 
              className="text-sm font-medium text-gray-700 hover:text-[#4052B5]"
            >
              Keynote Speaking
            </Link>
            <DropdownMenu {...navigationMenus.offerings} />
            <Link 
              href="/thought-leadership" 
              className="text-sm font-medium text-gray-700 hover:text-[#4052B5]"
            >
              Thought Leadership
            </Link>
            <Button 
              asChild 
              variant="default"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white"
            >
              <Link href="/schedule">Schedule Time With Us</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}


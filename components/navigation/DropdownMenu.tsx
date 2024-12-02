"use client"
import { useState } from "react"
import Link from "next/link"
import { MenuItem } from "@/config/navigation"
import { ChevronDown } from "lucide-react"

export function DropdownMenu({ label, items }: { label: string, items: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center space-x-1 text-gray-700 hover:text-[#4052B5] transition-colors duration-200 text-sm font-medium py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div 
        className={`
          absolute left-0 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 
          transition-all duration-200 ease-in-out transform
          md:mt-0 mt-2
          ${isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
          }
          md:absolute md:w-64 
          mobile:relative mobile:w-full
        `}
      >
        <div className="py-1">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4052B5]"
            >
              <div className="font-medium">{item.title}</div>
              {item.description && (
                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 
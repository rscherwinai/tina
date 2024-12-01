"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"

interface MenuItem {
  title: string
  path: string
  description?: string
}

interface DropdownMenuProps {
  label: string
  items: MenuItem[]
}

export function DropdownMenu({ label, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const menuRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150) // Small delay before closing
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <button
        className="flex items-center text-sm font-medium text-gray-700 hover:text-brand-primary py-2"
      >
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {/* Invisible bridge to prevent gap */}
      <div className="absolute -bottom-2 left-0 h-2 w-full" />

      <div
        className={`
          absolute left-0 w-80 bg-white rounded-lg shadow-lg py-3 z-50
          transition-all duration-200 ease-in-out
          ${isOpen 
            ? 'opacity-100 translate-y-2 visible' 
            : 'opacity-0 translate-y-0 invisible'
          }
        `}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="block px-4 py-3 hover:bg-gray-50 hover:text-brand-primary transition-colors"
          >
            <div className="text-sm font-medium text-gray-900 mb-1">
              {item.title}
            </div>
            {item.description && (
              <div className="text-xs text-gray-500">
                {item.description}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
} 
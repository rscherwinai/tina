"use client"
import { useState } from "react"
import { navigationItems } from "@/config/navigation"
import { NavItem } from "./NavItem"
import { DropdownMenu } from "./DropdownMenu"
import { Menu, X } from "lucide-react"

export function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 text-gray-700 hover:text-brand-primary"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-all duration-200">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)} className="text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-4 py-2 space-y-6">
              {navigationItems.map((item, index) => (
                <div key={index} className="w-full">
                  {item.type === "dropdown" ? (
                    <DropdownMenu label={item.label} items={item.items || []} />
                  ) : (
                    <NavItem item={item} />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  )
}



/*

"use client"
import { useState } from "react"
import { navigationItems } from "@/config/navigation"
import { NavItem } from "./NavItem"
import { DropdownMenu } from "./DropdownMenu"
import { Menu, X } from "lucide-react"

export function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 text-gray-700 hover:text-brand-primary"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-all duration-200">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)} className="text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-4 py-2">
              {navigationItems.map((item, index) => (
                <div key={index} onClick={() => setIsOpen(false)}>
                  {item.type === "dropdown" ? (
                    <DropdownMenu label={item.label} items={item.items || []} />
                  ) : (
                    <NavItem item={item} />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  )
} 

*/
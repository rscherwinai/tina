import Link from "next/link"
import { NavigationItem } from "@/config/navigation"

export function NavItem({ item }: { item: NavigationItem }) {
  if (item.type === "button") {
    return (
      <Link 
        href={item.path || "/"} 
        className="px-4 py-2 rounded-md bg-[#1a1f6f] text-white hover:bg-[#2a2f8f] transition-colors duration-200 font-medium text-sm shadow-sm"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <Link 
      href={item.path || "/"} 
      className="text-gray-700 hover:text-[#4052B5] transition-colors duration-200 text-sm font-medium"
    >
      {item.label}
    </Link>
  )
} 
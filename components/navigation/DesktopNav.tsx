import { navigationItems } from "../../config/navigation"
import { NavItem } from "./NavItem"
import { DropdownMenu } from "./DropdownMenu"

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationItems.map((item, index) => (
        <div key={index} className="relative">
          {item.type === "dropdown" ? (
            <DropdownMenu label={item.label} items={item.items || []} />
          ) : (
            <NavItem item={item} />
          )}
        </div>
      ))}
    </nav>
  )
} 
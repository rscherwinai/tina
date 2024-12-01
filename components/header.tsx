import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { navigationItems, type NavigationItem } from "@/config/navigation"

const NavigationItemComponent = ({ item }: { item: NavigationItem }) => {
  if (item.type === "dropdown") {
    return <DropdownMenu label={item.label} items={item.items || []} />
  }
  
  if (item.type === "button") {
    return (
      <Button asChild variant="default" className={item.className}>
        <Link href={item.path || "/"}>
          {item.label}
        </Link>
      </Button>
    )
  }

  return (
    <Link href={item.path || "/"} className={item.className}>
      {item.label}
    </Link>
  )
}

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
            {navigationItems.map((item) => (
              <NavigationItemComponent key={item.label} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}


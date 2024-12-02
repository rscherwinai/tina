import { NavBar } from "./nav-bar"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto">
        {/* Navigation */}
        <NavBar />
        
        {/* Additional header content can go here */}
        <div className="header-content">
          {/* Future site logic, announcements, etc. */}
        </div>
      </div>
    </header>
  )
}


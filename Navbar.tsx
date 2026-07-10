import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "Studio", href: "#services", active: false },
  { label: "About", href: "#", active: false },
  { label: "Journal", href: "#", active: false },
  {
    label: "Reach Us",
    href: "mailto:agrawalkrishna9999@gmail.com",
    active: false,
  },
]

function scrollToServices() {
  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
}

export function Navbar() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between px-8 py-6">
      <a
        href="#home"
        className="text-3xl tracking-tight text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Ev1lofDestruKtion<sup className="text-xs">®</sup>
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`text-sm transition-colors ${
              link.active
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <Button variant="glass" size="nav" onClick={scrollToServices}>
        Begin Journey
      </Button>
    </nav>
  )
}

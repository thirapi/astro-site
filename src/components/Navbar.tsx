// components/Navbar.tsx
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "Work", href: null },
  { name: "Resume", href: null },
];

export default function Navbar() {
  return (
    <header className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 bg-background/80 backdrop-blur-md rounded-xl shadow-md px-6 py-2 w-fit flex items-center gap-4 border border-border">
      <nav className="flex items-center gap-6 text-sm font-semibold font-[doto] tracking-wide">
        {links.map((link) =>
          link.href ? (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ) : (
            <span
              key={link.name}
              className="text-muted-foreground opacity-50 cursor-not-allowed"
            >
              {link.name}
            </span>
          )
        )}
      </nav>
    </header>
  );
}

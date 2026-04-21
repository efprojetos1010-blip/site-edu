import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Causas", href: "#causas" },
  { label: "Propostas", href: "#propostas" },
  { label: "Participe", href: "#participacao" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl text-foreground">
          Eduardo <span className="text-gradient-gold">Filho</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 font-body text-sm text-foreground hover:bg-muted transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

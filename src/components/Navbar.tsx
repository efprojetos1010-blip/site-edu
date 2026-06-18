import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Causas", href: "#causas" },
  { label: "Propostas", href: "#propostas" },
  { label: "Participe", href: "#participacao" },
];

const voluntariadoLink = "https://forms.gle/w1xWbVtyjeAHLjPj7";
const doacaoLink = "COLE_AQUI_O_LINK_DA_DOACAO";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl text-foreground">
          Eduardo <span className="text-gradient-gold">Filho</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}

          <div className="flex items-center gap-3">
            <a
              href={voluntariadoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0B4A33] px-5 py-2 text-xs lg:text-sm font-bold text-white shadow-md border border-[#0B4A33] hover:bg-[#083826] hover:border-[#083826] hover:scale-105 transition-all duration-300"
            >
              QUERO SER VOLUNTÁRIO
            </a>

            <a
              href={doacaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#D9A441] px-5 py-2 text-xs lg:text-sm font-bold text-[#1B1B1B] shadow-md border border-[#D9A441] hover:bg-[#C8922F] hover:border-[#C8922F] hover:scale-105 transition-all duration-300"
            >
              FAÇA UMA DOAÇÃO
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
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

          <a
            href={voluntariadoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block mx-6 my-4 rounded-full bg-[#0B4A33] px-5 py-3 text-center font-body text-sm font-bold text-white shadow-md border border-[#0B4A33]"
          >
            QUERO SER VOLUNTÁRIO
          </a>

          <a
            href={doacaoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block mx-6 my-4 rounded-full bg-[#D9A441] px-5 py-3 text-center font-body text-sm font-bold text-[#1B1B1B] shadow-md border border-[#D9A441]"
          >
            FAÇA UMA DOAÇÃO
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
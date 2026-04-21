import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <a
      href="https://wa.me/5541999999999?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20projeto%20do%20Eduardo%20Filho!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default FloatingCTA;

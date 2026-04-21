import { Instagram, Facebook, Youtube } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", url: "https://instagram.com/eduardofilho" },
  { icon: Facebook, label: "Facebook", url: "https://facebook.com/eduardofilho" },
  { icon: Youtube, label: "YouTube", url: "https://youtube.com/@eduardofilho" },
];

const SocialMedia = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6 lg:px-12 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl text-foreground">Acompanhe nas Redes</h2>
        <div className="flex justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-accent/20 transition-colors group"
            >
              <s.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;

import { Instagram, Facebook, Youtube } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    shortLabel: "Instagram",
    url: "https://www.instagram.com/eduardofilho.ef?igsh=ZW5mYnU0eGk2MjFl",
  },
  {
    icon: Facebook,
    label: "Facebook",
    shortLabel: "Facebook",
    url: "https://web.facebook.com/eduardo.filho.988373?rdid=XVe6kRRsI7fhTeP7&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F186djr7wG3%2F%3F_rdc%3D1%26_rdr#",
  },
  {
    icon: Youtube,
    label: "YouTube - Conecta Deus",
    shortLabel: "Conecta Deus",
    url: "https://www.youtube.com/@conectadeus_ef",
  },
  {
    icon: Youtube,
    label: "YouTube - Impacto Social",
    shortLabel: "Impacto Social",
    url: "https://www.youtube.com/@ImpactoSocialEF",
  },
  {
    icon: Youtube,
    label: "YouTube - Movimento Pretafro",
    shortLabel: "Movimento Pretafro",
    url: "https://www.youtube.com/@movimentopretafro",
  },
];

const SocialMedia = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6 lg:px-12 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl text-foreground">
          Acompanhe nas Redes
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
              className="flex flex-col items-center gap-3 w-28 group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>

              <span className="text-sm font-body text-muted-foreground leading-tight group-hover:text-foreground transition-colors">
                {s.shortLabel}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
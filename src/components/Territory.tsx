import {
  MapPin,
  Fingerprint,
  TrendingUp,
  Users,
  GraduationCap,
  Heart,
  Venus,
} from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Territórios",
    desc: "Presença ativa em todas as regiões do estado, com atenção às diferentes realidades locais e ao fortalecimento do vínculo entre mandato, municípios e população.",
    highlight: true,
  },
  {
    icon: Fingerprint,
    title: "Identidade",
    desc: "Valorização das culturas, comunidades e expressões que formam a diversidade social e simbólica do Paraná.",
  },
  {
    icon: TrendingUp,
    title: "Desenvolvimento",
    desc: "Promoção de crescimento com inclusão, oportunidades e presença efetiva de políticas públicas nos territórios.",
  },
  {
    icon: Users,
    title: "Representação",
    desc: "Um mandato próximo da população, baseado em escuta, participação social e compromisso com a vida real das pessoas.",
  },
  {
    icon: GraduationCap,
    title: "Juventude",
    desc: "Formação, trabalho e perspectiva de futuro para a juventude paranaense em diferentes regiões do estado.",
  },
  {
    icon: Venus,
    title: "Mulheres",
    desc: "Fortalecimento de políticas públicas voltadas à proteção, autonomia, participação e ampliação de oportunidades para as mulheres paranaenses.",
  },
  {
    icon: Heart,
    title: "Diversidade",
    desc: "Respeito, inclusão e participação de todos, com reconhecimento das múltiplas realidades que compõem o Paraná.",
  },
];

const Territory = () => {
  return (
    <section
      id="territorio"
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Subtle araucária background */}
      <svg
        className="absolute right-8 top-10 w-32 h-64 opacity-[0.06]"
        viewBox="0 0 100 220"
        fill="none"
        aria-hidden="true"
      >
        <line x1="50" y1="210" x2="50" y2="60" stroke="currentColor" strokeWidth="4" />
        <path
          d="M50 60 L25 95 L40 85 L30 110 L45 100 L35 125 L50 110 L65 125 L55 100 L70 110 L60 85 L75 95 Z"
          fill="currentColor"
        />
        <path
          d="M50 90 L30 120 L42 112 L34 135 L46 126 L40 145 L50 132 L60 145 L54 126 L66 135 L58 112 L70 120 Z"
          fill="currentColor"
        />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
          <div className="african-line w-24 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl text-primary-foreground">
            Um projeto para todo o Paraná
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 leading-relaxed">
            Eduardo Filho constrói sua pré-candidatura com base na escuta dos territórios e na
            valorização das diferentes realidades do Paraná. Do litoral ao interior, das grandes
            cidades aos pequenos municípios, o compromisso é com um estado mais justo, mais presente
            e mais conectado com sua população.
          </p>
          <p className="font-body text-lg text-primary-foreground/80 leading-relaxed">
            A proposta é fortalecer o desenvolvimento regional, ampliar oportunidades, valorizar a
            diversidade, garantir representação social e fazer com que as políticas públicas cheguem
            onde realmente fazem diferença.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, desc, highlight }) => (
            <div
              key={title}
              className="relative p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group overflow-hidden"
            >
              {highlight && (
                <div className="absolute right-4 top-4 opacity-[0.14] pointer-events-none">
                  <svg
                    width="84"
                    height="84"
                    viewBox="0 0 100 100"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M34 10 L54 14 L64 24 L75 26 L82 39 L77 52 L84 64 L74 78 L58 84 L48 93 L34 88 L22 78 L19 64 L11 52 L15 39 L24 29 L23 18 Z"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-accent"
                    />
                    <circle cx="46" cy="48" r="6" fill="currentColor" className="text-accent" />
                  </svg>
                </div>
              )}

              <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />

              <h3 className="font-display text-2xl text-accent mb-2">{title}</h3>

              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Territory;
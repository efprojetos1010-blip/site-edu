import { MapPin, Fingerprint, TrendingUp, Users, GraduationCap, Heart } from "lucide-react";

const cards = [
  { icon: MapPin, title: "Territórios", desc: "Presença ativa em todas as regiões do estado" },
  { icon: Fingerprint, title: "Identidade", desc: "Valorização das culturas e comunidades do Paraná" },
  { icon: TrendingUp, title: "Desenvolvimento", desc: "Crescimento com inclusão e oportunidades" },
  { icon: Users, title: "Representação", desc: "Um mandato próximo da população" },
  { icon: GraduationCap, title: "Juventude", desc: "Formação, trabalho e futuro" },
  { icon: Heart, title: "Diversidade", desc: "Respeito e participação de todos" },
];

const Territory = () => {
  return (
    <section id="territorio" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle araucária background */}
      <svg className="absolute right-8 top-10 w-32 h-64 opacity-[0.06]" viewBox="0 0 100 220" fill="none" aria-hidden="true">
        <line x1="50" y1="210" x2="50" y2="60" stroke="currentColor" strokeWidth="4"/>
        <path d="M50 60 L25 95 L40 85 L30 110 L45 100 L35 125 L50 110 L65 125 L55 100 L70 110 L60 85 L75 95 Z" fill="currentColor"/>
        <path d="M50 90 L30 120 L42 112 L34 135 L46 126 L40 145 L50 132 L60 145 L54 126 L66 135 L58 112 L70 120 Z" fill="currentColor"/>
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
            diversidade e garantir que as políticas públicas cheguem onde realmente fazem diferença.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
            >
              <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl text-accent mb-2">{title}</h3>
              <p className="font-body text-sm text-primary-foreground/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Territory;

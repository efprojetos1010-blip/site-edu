import {
  Palette,
  Users,
  GraduationCap,
  HeartHandshake,
  Church,
  Lightbulb,
  MapPinned,
} from "lucide-react";

const causes = [
  {
    icon: Palette,
    title: "Cultura e Identidade",
    description:
      "Valorização das raízes culturais, das expressões simbólicas e das identidades que formam o Paraná, com promoção de políticas públicas voltadas à diversidade, à memória e ao pertencimento.",
  },
  {
    icon: Users,
    title: "Igualdade Racial",
    description:
      "Enfrentamento do racismo estrutural por meio de políticas públicas que ampliem direitos, oportunidades e representação, com atenção à população negra e aos grupos racializados no estado.",
  },
  {
    icon: GraduationCap,
    title: "Juventude",
    description:
      "Fortalecimento de políticas de educação, qualificação profissional, empregabilidade e perspectiva de futuro, criando condições concretas para o desenvolvimento da juventude paranaense.",
  },
  {
    icon: HeartHandshake,
    title: "Desenvolvimento Social",
    description:
      "Promoção de políticas inclusivas voltadas à redução das desigualdades, com atenção às populações em maior vulnerabilidade e reconhecimento do papel estratégico do terceiro setor na transformação social.",
  },
  {
    icon: Church,
    title: "Liberdade Religiosa",
    description:
      "Garantia de respeito e proteção à diversidade de crenças e manifestações de fé, promovendo convivência democrática, tolerância e uma cultura de paz entre diferentes comunidades religiosas.",
  },
  {
    icon: Lightbulb,
    title: "Inovação e Gestão",
    description:
      "Modernização da máquina pública com transparência, eficiência e uso responsável da tecnologia, aproximando os serviços do cidadão e ampliando a capacidade de resposta do Estado.",
  },
  {
    icon: MapPinned,
    title: "Povos e Comunidades Tradicionais",
    description:
      "Reconhecimento, proteção e valorização dos povos e comunidades tradicionais, assegurando direitos, visibilidade institucional e políticas públicas voltadas aos seus territórios, culturas e modos de vida.",
  },
];

const Causes = () => {
  return (
    <section id="causas" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <div className="african-line w-16 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl text-foreground">
            Bandeiras & Causas
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            O propósito de governo de Eduardo Filho é orientado pela execução de
            medidas que atendam de forma concreta a população do estado do
            Paraná, com foco em direitos, desenvolvimento social, inclusão,
            representação e presença efetiva do poder público nos territórios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <cause.icon className="w-7 h-7 text-primary group-hover:text-accent" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {cause.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {cause.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;
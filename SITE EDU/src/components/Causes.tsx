import { Palette, Users, GraduationCap, HeartHandshake, Church, Lightbulb } from "lucide-react";

const causes = [
  { icon: Palette, title: "Cultura e Identidade", description: "Valorização das raízes culturais e promoção de políticas públicas para a diversidade." },
  { icon: Users, title: "Igualdade Racial", description: "Combate ao racismo estrutural e ampliação de oportunidades para todos." },
  { icon: GraduationCap, title: "Juventude", description: "Educação, emprego e perspectiva de futuro para os jovens paranaenses." },
  { icon: HeartHandshake, title: "Desenvolvimento Social", description: "Políticas inclusivas que alcançam quem mais precisa." },
  { icon: Church, title: "Liberdade Religiosa", description: "Respeito e proteção à diversidade de crenças e manifestações de fé." },
  { icon: Lightbulb, title: "Inovação e Gestão", description: "Modernização da máquina pública com transparência e eficiência." },
];

const Causes = () => {
  return (
    <section id="causas" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <div className="african-line w-16 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl text-foreground">Bandeiras & Causas</h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            As causas que movem Eduardo Filho e guiam sua pré-candidatura.
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
              <h3 className="font-display text-2xl text-foreground mb-3">{cause.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;

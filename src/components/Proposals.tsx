import { Check } from "lucide-react";

const proposals = [
  "Criação de centros culturais descentralizados em todas as regiões do Paraná",
  "Programa estadual de combate ao racismo e promoção da igualdade racial",
  "Fomento ao empreendedorismo jovem com apoio técnico e financeiro",
  "Modernização digital dos serviços públicos para maior transparência",
  "Política de valorização e proteção das comunidades tradicionais",
  "Incentivo à inovação tecnológica com foco em inclusão social",
  "Ampliação de programas de qualificação profissional para juventude",
  "Fortalecimento da economia criativa e cultural do estado",
];

const Proposals = () => {
  return (
    <section id="propostas" className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="african-line w-16 mx-auto rounded-full" />
            <h2 className="text-4xl md:text-5xl text-foreground">Propostas</h2>
            <p className="font-body text-muted-foreground text-lg">
              Ações concretas para transformar o Paraná.
            </p>
          </div>

          <div className="space-y-4">
            {proposals.map((proposal, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:border-accent/40 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                <p className="font-body text-foreground leading-relaxed">{proposal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposals;

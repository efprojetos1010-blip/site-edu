import { Check } from "lucide-react";

const proposals = [
  "Criação de centros culturais descentralizados em todas as regiões do Paraná.",
  "Implementação de uma política estadual de justiça climática, com execução de um Plano Estadual do Clima voltado à adaptação, prevenção de riscos e proteção socioambiental.",
  "Programa estadual de combate ao racismo e promoção da igualdade racial, com criação e fortalecimento de Conselhos Municipais de Igualdade Racial.",
  "Criação do selo Empresa Antirracista para incentivar boas práticas de inclusão, diversidade e responsabilidade social no setor produtivo.",
  "Instituição do programa Negro Aprendiz, com estímulo à inserção de jovens negros no mercado de trabalho e mecanismos de incentivo à contratação.",
  "Fomento ao empreendedorismo jovem com apoio técnico, formação continuada e acesso ampliado a instrumentos de crédito e financiamento.",
  "Políticas públicas de enfrentamento à violência doméstica, com fortalecimento da rede de proteção, acolhimento e prevenção.",
  "Criação de programas de apoio e cuidado voltados às mães de crianças autistas, com articulação entre assistência social, saúde e educação.",
  "Modernização digital dos serviços públicos para maior transparência, ampliação do acesso e implantação de guichês de autoatendimento em pontos estratégicos.",
  "Política de valorização e proteção das comunidades tradicionais, com reconhecimento institucional e inclusão dos territórios nos bancos e cadastros nacionais.",
  "Incentivo à inovação tecnológica com foco em inclusão social e melhoria da capacidade de resposta do poder público.",
  "Ampliação de programas de qualificação profissional para juventude, conectando formação, empregabilidade e desenvolvimento regional.",
  "Fortalecimento da economia criativa e cultural do estado como eixo de geração de renda, identidade e desenvolvimento local.",
  "Elaboração de um plano estadual de combate à corrupção, com medidas de integridade, controle social e transparência administrativa.",
  "Criação, no âmbito da ALEP, de uma comissão voltada ao recebimento e encaminhamento de iniciativas de legislação popular.",
];

const Proposals = () => {
  return (
    <section id="propostas" className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="african-line w-16 mx-auto rounded-full" />
            <h2 className="text-4xl md:text-5xl text-foreground">Propostas</h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Medidas voltadas à promoção de direitos, ao fortalecimento dos territórios
              e à construção de um Paraná mais justo, eficiente e socialmente comprometido.
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
                <p className="font-body text-foreground leading-relaxed">
                  {proposal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposals;
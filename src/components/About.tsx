const About = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="african-line w-16 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl text-foreground">Sobre Eduardo Filho</h2>

          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Nascido em São Paulo e abraçado pelo estado do Paraná há mais de 20 anos, Eduardo Filho construiu sua trajetória a partir da contribuição em diferentes espaços da sociedade paranaense. Sua atuação inclui iniciativas sociais, comunitárias e institucionais, com participação em causas, lutas e ações voltadas ao fortalecimento da cidadania, da cultura e do desenvolvimento social.
          </p>

          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Com experiência acumulada na articulação com territórios, organizações e órgãos públicos, Eduardo defende uma política baseada em proximidade, escuta e compromisso com as pessoas. Sua proposta é ampliar a representação dos cidadãos, especialmente daqueles que buscam inovação política, inclusão e presença efetiva do poder público, contribuindo para um Paraná plural, eficiente e orientado ao interesse coletivo.A experiência aqui apresentada parte da trajetória de Eduardo Filho enquanto ator social inserido historicamente em espaços de articulação comunitária, mobilização social e construção de políticas públicas. Sua atuação não se limita à dimensão institucional ou eleitoral, mas atravessa uma trajetória de vida dedicada ao diálogo com diferentes comunidades, lideranças e demandas sociais, especialmente em contextos marcados por desigualdades, vulnerabilidades e ausência de representação. Nesse sentido, a experiência acumulada ao longo de sua caminhada constitui um repertório político e social construído na prática cotidiana, a partir da escuta, da mediação de conflitos, da promoção de iniciativas coletivas e da participação ativa em ações voltadas ao fortalecimento de direitos, cidadania e desenvolvimento social.
          </p>

          <div className="grid grid-cols-3 gap-8 pt-8">
            {[
              { number: "+20", label: "Anos de atuação social" },
              { number: "100+", label: "Projetos comunitários" },
              { number: "50K+", label: "Pessoas impactadas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-gradient-gold">
                  {stat.number}
                </div>
                <div className="font-body text-sm text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
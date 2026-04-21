const About = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="african-line w-16 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl text-foreground">Sobre Eduardo Filho</h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Nascido e criado em Curitiba, Eduardo Filho carrega consigo as raízes culturais que moldaram
            sua visão de mundo. Com trajetória marcada pela atuação social e comunitária, ele acredita
            que a política deve ser feita com identidade, proximidade e compromisso real com as pessoas.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Atuante em causas de igualdade racial, cultura e desenvolvimento social, Eduardo busca
            representar todos os paranaenses que acreditam em um Paraná mais justo, diverso e inovador.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8">
            {[
              { number: "+10", label: "Anos de atuação social" },
              { number: "100+", label: "Projetos comunitários" },
              { number: "50k+", label: "Pessoas impactadas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-gradient-gold">{stat.number}</div>
                <div className="font-body text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

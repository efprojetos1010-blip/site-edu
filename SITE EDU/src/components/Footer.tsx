const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="african-line w-full mb-8 rounded-full" />
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="font-display text-2xl text-background">Eduardo Filho</h3>
            <p className="font-body text-sm text-background/60 mt-2">
              Pré-candidato a Deputado Estadual — Paraná
            </p>
          </div>
          <div className="text-center">
            <p className="font-body text-sm text-background/60">
              PSDB — Partido da Social Democracia Brasileira
            </p>
            <p className="font-body text-xs text-background/40 mt-2">
              Este material é de caráter informativo e não configura propaganda eleitoral.
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-body text-sm text-background/60">Contato</p>
            <a href="mailto:contato@eduardofilho.com.br" className="font-body text-sm text-accent hover:underline">
              contato@eduardofilho.com.br
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-background/10 text-center">
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} Eduardo Filho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

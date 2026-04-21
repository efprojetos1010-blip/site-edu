import eduardoHero from "@/assets/eduardo-hero-novo.jpg";
import raizesBg from "@/assets/raizes-africanas-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 z-30 h-3 african-line" />

      <div className="absolute right-0 top-0 w-[55%] h-full overflow-hidden pointer-events-none z-0">
        <img
          src={raizesBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.06] mix-blend-multiply"
        />
      </div>

      <div className="absolute right-0 top-0 w-[45%] h-full bg-primary/[0.04]" />
      <div className="absolute right-[8%] top-0 w-[3px] h-full bg-accent/30" />
      <div className="absolute right-[12%] top-0 w-[6px] h-full bg-primary/20" />
      <div className="absolute right-[14%] top-0 w-[2px] h-full bg-orange/25" />

      <div className="absolute -right-20 top-0 w-[400px] h-full bg-primary/[0.06] origin-top-right -skew-x-12" />
      <div className="absolute -right-10 top-0 w-[200px] h-full bg-accent/[0.07] origin-top-right -skew-x-[20deg]" />

      <div className="absolute top-[20%] right-0 w-[55%] h-[2px] bg-accent/40" />
      <div className="absolute top-[22%] right-0 w-[45%] h-[1px] bg-primary/30" />
      <div className="absolute bottom-[25%] right-0 w-[50%] h-[2px] bg-orange/30" />
      <div className="absolute bottom-[27%] right-0 w-[35%] h-[1px] bg-destructive/20" />

      <svg
        className="absolute top-[8%] right-[15%] w-80 h-80 opacity-[0.15]"
        viewBox="0 0 300 300"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="110"
          y="110"
          width="80"
          height="80"
          transform="rotate(45 150 150)"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="125"
          y="125"
          width="50"
          height="50"
          transform="rotate(45 150 150)"
          stroke="hsl(var(--accent))"
          strokeWidth="2.5"
          fill="none"
        />
        <rect
          x="138"
          y="138"
          width="24"
          height="24"
          transform="rotate(45 150 150)"
          fill="hsl(var(--accent))"
          opacity="0.4"
        />
        <circle
          cx="150"
          cy="150"
          r="130"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          opacity="0.4"
        />
        <circle
          cx="150"
          cy="150"
          r="110"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.3"
        />
      </svg>

      <svg
        className="absolute right-0 top-[10%] w-16 h-[80%] opacity-[0.2]"
        viewBox="0 0 50 500"
        fill="none"
        aria-hidden="true"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <g key={i} transform={`translate(0, ${i * 35})`}>
            <rect
              x="10"
              y="4"
              width="18"
              height="18"
              transform="rotate(45 19 13)"
              fill={
                i % 4 === 0
                  ? "hsl(var(--primary))"
                  : i % 4 === 1
                  ? "hsl(var(--accent))"
                  : i % 4 === 2
                  ? "hsl(var(--orange))"
                  : "hsl(var(--destructive))"
              }
              opacity="0.7"
            />
            <rect
              x="28"
              y="16"
              width="10"
              height="10"
              transform="rotate(45 33 21)"
              fill={i % 3 === 0 ? "hsl(var(--accent))" : "hsl(var(--orange))"}
              opacity="0.5"
            />
          </g>
        ))}
      </svg>

      <svg
        className="absolute right-[6%] top-[5%] w-10 h-[70%] opacity-[0.12]"
        viewBox="0 0 30 400"
        fill="none"
        aria-hidden="true"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <g key={i} transform={`translate(0, ${i * 40})`}>
            <circle
              cx="15"
              cy="15"
              r="8"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            <circle cx="15" cy="15" r="3" fill="hsl(var(--accent))" opacity="0.5" />
          </g>
        ))}
      </svg>

      <div className="absolute top-[12%] right-[30%] w-10 h-10 bg-accent/20 rotate-45 rounded-sm" />
      <div className="absolute top-[18%] right-[22%] w-6 h-6 bg-primary/25 rotate-12 rounded-sm" />
      <div className="absolute top-[35%] right-[5%] w-8 h-8 bg-orange/20 rotate-45 rounded-sm" />
      <div className="absolute bottom-[20%] right-[25%] w-5 h-5 bg-destructive/15 rotate-45 rounded-sm" />
      <div className="absolute bottom-[35%] right-[10%] w-7 h-7 bg-accent/25 rotate-12 rounded-sm" />
      <div className="absolute top-[55%] right-[3%] w-4 h-4 bg-primary/20 rotate-45 rounded-sm" />

      <svg
        className="absolute top-[30%] left-[3%] w-32 h-32 opacity-[0.07]"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="45" stroke="hsl(var(--accent))" strokeWidth="2" />
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="hsl(var(--orange))"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
        <circle cx="50" cy="50" r="12" fill="hsl(var(--primary))" opacity="0.2" />
      </svg>

      <svg
        className="absolute bottom-[30%] right-[28%] w-16 h-16 opacity-[0.08]"
        viewBox="0 0 60 60"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M30 30 C30 25 35 20 40 20 C45 20 50 25 50 30 C50 40 40 45 30 45 C15 45 10 35 10 25 C10 10 25 5 35 5"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className="absolute bottom-[10%] left-[4%] w-24 h-52 opacity-[0.05] text-primary"
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

      <div className="absolute top-[42%] left-0 right-[55%] h-[3px] african-line opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-24 lg:py-0">
          <div className="order-2 lg:order-1 space-y-8 pb-16 lg:pb-32">
            <div className="african-line w-24 rounded-full" />

            <div className="space-y-4">
              <p className="font-body text-sm md:text-base uppercase tracking-[0.25em] text-muted-foreground">
                Eduardo Filho
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-none tracking-wider">
                <span className="text-foreground">O Paraná pode mais.</span>
              </h1>
            </div>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Por uma política real, com compromisso com as pessoas, com valores públicos
              e com o Estado do Paraná.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#propostas"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Conheça minhas propostas
              </a>

              <a
                href="#participacao"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-accent text-accent-foreground font-body font-semibold text-lg hover:bg-accent/10 transition-colors"
              >
                Participe do projeto
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-end relative self-end">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-accent/[0.12] blur-[60px] rounded-full z-0" />

            <div className="absolute bottom-0 right-[5%] w-[80%] h-[90%] bg-gradient-to-t from-primary/[0.08] via-primary/[0.04] to-transparent rounded-t-3xl z-0" />
            <div className="absolute bottom-0 right-[15%] w-[50%] h-[70%] bg-gradient-to-t from-accent/[0.08] to-transparent rounded-t-2xl z-0" />

            <svg
              className="absolute -right-2 top-[5%] w-16 h-[85%] opacity-40 z-0"
              viewBox="0 0 50 500"
              fill="none"
              aria-hidden="true"
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <g key={i} transform={`translate(0, ${i * 42})`}>
                  <rect
                    x="8"
                    y="0"
                    width="18"
                    height="18"
                    transform="rotate(45 17 9)"
                    fill="hsl(var(--primary))"
                    opacity="0.5"
                  />
                  <rect
                    x="25"
                    y="12"
                    width="12"
                    height="12"
                    transform="rotate(45 31 18)"
                    fill="hsl(var(--accent))"
                    opacity="0.6"
                  />
                  <rect
                    x="3"
                    y="22"
                    width="10"
                    height="10"
                    transform="rotate(45 8 27)"
                    fill="hsl(var(--orange))"
                    opacity="0.4"
                  />
                </g>
              ))}
            </svg>

            <img
              src={eduardoHero}
              alt="Eduardo Filho, pré-candidato a deputado estadual pelo Paraná"
              className="relative z-10 w-[300px] md:w-[390px] lg:w-[470px] xl:w-[540px] max-h-[88vh] object-contain object-bottom"
              style={{
                filter: "drop-shadow(0 8px 40px rgba(242, 201, 76, 0.25))",
              }}
            />

            <svg
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-72 h-10 opacity-50 z-20"
              viewBox="0 0 280 40"
              fill="none"
              aria-hidden="true"
            >
              {Array.from({ length: 11 }).map((_, i) => (
                <rect
                  key={i}
                  x={2 + i * 25}
                  y="8"
                  width="16"
                  height="16"
                  transform={`rotate(45 ${10 + i * 25} 16)`}
                  fill={
                    i % 4 === 0
                      ? "hsl(var(--primary))"
                      : i % 4 === 1
                      ? "hsl(var(--accent))"
                      : i % 4 === 2
                      ? "hsl(var(--orange))"
                      : "hsl(var(--destructive))"
                  }
                  opacity="0.6"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 h-3 african-line" />
    </section>
  );
};

export default Hero;
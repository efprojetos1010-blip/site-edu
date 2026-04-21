import eduardoHero from "@/assets/eduardo-hero-transparente.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-white via-[#f8f7f2] to-[#f3efe3]">
      <div className="absolute top-0 left-0 right-0 z-30 h-3 african-line" />

      {/* Faixas e textura leve */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-full w-[38%] bg-primary/[0.04]" />
        <div className="absolute right-[7%] top-0 h-full w-[3px] bg-accent/25" />
        <div className="absolute right-[11%] top-0 h-full w-[6px] bg-primary/15" />
        <div className="absolute right-[14%] top-0 h-full w-[2px] bg-orange/20" />

        <div className="absolute top-[18%] right-0 h-[2px] w-[48%] bg-accent/25" />
        <div className="absolute top-[21%] right-0 h-[1px] w-[40%] bg-primary/20" />
        <div className="absolute bottom-[24%] right-0 h-[2px] w-[44%] bg-orange/20" />

        <div className="absolute top-[14%] right-[27%] h-8 w-8 rotate-45 rounded-sm bg-accent/15" />
        <div className="absolute top-[21%] right-[20%] h-5 w-5 rotate-12 rounded-sm bg-primary/20" />
        <div className="absolute bottom-[26%] right-[14%] h-6 w-6 rotate-45 rounded-sm bg-orange/15" />
        <div className="absolute bottom-[33%] right-[7%] h-4 w-4 rotate-45 rounded-sm bg-destructive/10" />

        <svg
          className="absolute right-[4%] top-[8%] h-[78%] w-14 opacity-[0.16]"
          viewBox="0 0 50 500"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <g key={i} transform={`translate(0, ${i * 46})`}>
              <rect
                x="10"
                y="4"
                width="16"
                height="16"
                transform="rotate(45 18 12)"
                fill="hsl(var(--primary))"
                opacity="0.45"
              />
              <rect
                x="25"
                y="18"
                width="10"
                height="10"
                transform="rotate(45 30 23)"
                fill="hsl(var(--accent))"
                opacity="0.45"
              />
            </g>
          ))}
        </svg>

        <svg
          className="absolute left-[3%] top-[28%] h-28 w-28 opacity-[0.06]"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="44" stroke="hsl(var(--accent))" strokeWidth="2" />
          <circle
            cx="50"
            cy="50"
            r="28"
            stroke="hsl(var(--orange))"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
        </svg>

        <div className="absolute top-[42%] left-0 right-[56%] h-[3px] african-line opacity-25" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid min-h-screen items-center gap-8 py-24 lg:grid-cols-2 lg:py-0">
          {/* Texto */}
          <div className="order-2 space-y-8 pb-16 lg:order-1 lg:pb-24">
            <div className="african-line w-24 rounded-full" />

            <div className="space-y-4">
              <p className="font-body text-sm uppercase tracking-[0.28em] text-muted-foreground md:text-base">
                Eduardo Filho
              </p>

              <h1 className="text-5xl leading-none tracking-wider text-foreground md:text-6xl lg:text-7xl">
                O Paraná pode mais.
              </h1>
            </div>

            <p className="max-w-xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
              Por uma política real, com compromisso com as pessoas, com valores públicos
              e com o Estado do Paraná.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href="#propostas"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-body text-lg font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Conheça minhas propostas
              </a>

              <a
                href="#participacao"
                className="inline-flex items-center justify-center rounded-lg border-2 border-accent px-8 py-4 font-body text-lg font-semibold text-accent-foreground transition-colors hover:bg-accent/10"
              >
                Participe do projeto
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="order-1 relative flex items-end justify-center self-end lg:order-2 lg:justify-end">
            <div className="absolute bottom-[8%] left-1/2 z-0 h-[48%] w-[72%] -translate-x-1/2 rounded-full bg-accent/[0.14] blur-[70px]" />

            <div className="absolute bottom-0 right-[6%] z-0 h-[82%] w-[72%] rounded-t-[2rem] bg-gradient-to-t from-primary/[0.10] via-primary/[0.05] to-transparent" />
            <div className="absolute bottom-0 right-[14%] z-0 h-[62%] w-[45%] rounded-t-[1.5rem] bg-gradient-to-t from-accent/[0.08] to-transparent" />

            <img
              src={eduardoHero}
              alt="Eduardo Filho, pré-candidato a deputado estadual pelo Paraná"
              className="relative z-10 w-[320px] object-contain object-bottom md:w-[420px] lg:w-[500px] xl:w-[560px]"
              style={{
                filter: "drop-shadow(0 10px 40px rgba(0, 0, 0, 0.18))",
              }}
            />

            <svg
              className="absolute -bottom-1 left-1/2 z-20 h-10 w-72 -translate-x-1/2 opacity-45"
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
                  opacity="0.55"
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
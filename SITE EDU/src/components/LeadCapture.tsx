import { useState } from "react";
import africanPattern from "@/assets/african-pattern.png";

const LeadCapture = () => {
  const [form, setForm] = useState({ nome: "", whatsapp: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to backend
    setSubmitted(true);
  };

  return (
    <section id="participacao" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 opacity-10 pointer-events-none">
        <img src={africanPattern} alt="" className="w-full h-20 object-cover" loading="lazy" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <div className="african-line w-16 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl text-foreground">Faça Parte Dessa Construção</h2>
          <p className="font-body text-muted-foreground text-lg">
            Junte-se ao movimento. Cadastre-se e participe ativamente do projeto de Eduardo Filho.
          </p>

          {submitted ? (
            <div className="p-8 rounded-xl bg-primary/10 border border-primary/20">
              <p className="font-body text-lg text-primary font-semibold">
                Obrigado por se cadastrar! Em breve entraremos em contato.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="nome" className="font-body text-sm font-medium text-foreground mb-1 block">Nome</label>
                <input
                  id="nome"
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="font-body text-sm font-medium text-foreground mb-1 block">WhatsApp</label>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  maxLength={20}
                  placeholder="(41) 99999-9999"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-body text-sm font-medium text-foreground mb-1 block">E-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Quero participar
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;

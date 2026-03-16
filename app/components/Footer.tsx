const shopLinks = ["Inicio", "Camisas", "Acessorios", "Kits", "Ofertas"];

const infoLinks = [
  "Politica de Privacidade",
  "Trocas e Devolucoes",
  "Termos de Uso",
  "Rastreio do Pedido",
];

const contactLinks = ["WhatsApp", "suporte@canarinhoclub.com", "@canarinhoclub"];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[36px] border border-[rgba(217,232,223,0.82)] bg-[linear-gradient(180deg,#103529_0%,#0d2c23_100%)] px-6 py-10 text-white shadow-[0_24px_70px_rgba(10,72,55,0.18)] sm:px-8 sm:py-12 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="max-w-sm">
            <h2 className="text-2xl font-black tracking-[-0.04em]">
              Canarinho Club
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
              Produtos para quem vive a emocao do Brasil dentro e fora dos
              jogos.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">
              Navegacao
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/82">
              {shopLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">
              Informacoes
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/82">
              {infoLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/82">
              {contactLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/56">
          © {currentYear} Canarinho Club. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

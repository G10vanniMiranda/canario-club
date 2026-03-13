import { Header } from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pt-14">
        <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_24px_80px_rgba(10,72,55,0.08)]">
          <div className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,_rgba(243,198,35,0.20),_transparent_42%),radial-gradient(circle_at_top_right,_rgba(37,99,184,0.12),_transparent_38%)]" />

            <div className="relative max-w-3xl">
              <span className="inline-flex rounded-full border border-[color:var(--line-soft)] bg-[color:var(--surface-soft)] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--accent-green)]">
                Campanha da copa
              </span>

              <h1 className="mt-6 text-4xl font-black leading-none tracking-[-0.05em] text-[color:var(--ink-strong)] sm:text-5xl lg:text-6xl">
                Vista a paixao pelo Brasil nesta Copa 🇧🇷
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--ink-soft)] sm:text-lg">
                Camisas, acessorios e kits de torcida para voce viver cada jogo
                com emocao, estilo e espirito de campeao.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent-green),#0f8b66_100%)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(17,151,107,0.28)] transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Comprar camisas
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--ink-strong)] transition hover:bg-[color:var(--surface-soft)]"
                >
                  Ver acessorios
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-[color:var(--line-soft)] bg-[color:var(--surface-soft)] px-4 py-2 text-sm font-medium text-[color:var(--ink-strong)]">
                  Compra segura
                </span>
                <span className="inline-flex items-center rounded-full border border-[color:var(--line-soft)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--ink-strong)]">
                  Envio para todo o Brasil
                </span>
                <span className="inline-flex items-center rounded-full border border-[color:var(--line-soft)] bg-[#fff8df] px-4 py-2 text-sm font-medium text-[color:var(--ink-strong)]">
                  Ofertas por tempo limitado
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

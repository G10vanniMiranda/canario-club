export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-18 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8 lg:pt-16">
      <div className="relative overflow-hidden rounded-[36px] bg-white px-6 py-12 shadow-[0_30px_100px_rgba(10,72,55,0.08)] sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-[-6%] h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(243,198,35,0.24)_0%,_rgba(243,198,35,0)_72%)] blur-2xl" />
          <div className="absolute right-[-4%] top-[4%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(37,99,184,0.14)_0%,_rgba(37,99,184,0)_72%)] blur-2xl" />
          <div className="absolute bottom-[-14%] left-[12%] h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(17,151,107,0.12)_0%,_rgba(17,151,107,0)_74%)] blur-2xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--line-soft)] to-transparent" />
        </div>

        <div className="relative max-w-3xl">
          <span className="inline-flex rounded-full border border-[color:var(--line-soft)] bg-[rgba(243,248,244,0.88)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.30em] text-[color:var(--accent-green)] shadow-[0_10px_24px_rgba(17,151,107,0.08)]">
            Campanha da copa
          </span>

          <h1 className="mt-8 max-w-[13ch] text-4xl font-black leading-[0.96] tracking-[-0.06em] text-[color:var(--ink-strong)] sm:text-5xl lg:text-[4.75rem]">
            Vista a paixao pelo Brasil nesta Copa 🇧🇷
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--ink-soft)] sm:text-[1.2rem] sm:leading-9">
            Camisas, acessorios e kits de torcida para voce viver cada jogo com
            emocao, estilo e espirito de campeao.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:max-w-xl sm:flex-row">
            <a
              href="#"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent-green),#0f8b66_100%)] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_40px_rgba(17,151,107,0.28)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105"
            >
              Comprar camisas
            </a>
            <a
              href="#"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-white/92 px-7 py-4 text-base font-semibold text-[color:var(--ink-strong)] shadow-[0_10px_24px_rgba(10,72,55,0.06)] transition duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)]"
            >
              Ver acessorios
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3.5">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[color:var(--line-soft)] bg-[color:var(--surface-soft)] px-4 py-2.5 text-sm font-medium text-[color:var(--ink-strong)] shadow-[0_8px_20px_rgba(10,72,55,0.04)]">
              <span aria-hidden="true">🔒</span>
              Compra segura
            </span>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[color:var(--line-soft)] bg-white px-4 py-2.5 text-sm font-medium text-[color:var(--ink-strong)] shadow-[0_8px_20px_rgba(10,72,55,0.04)]">
              <span aria-hidden="true">🚚</span>
              Envio para todo o Brasil
            </span>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[color:var(--line-soft)] bg-[#fff8df] px-4 py-2.5 text-sm font-medium text-[color:var(--ink-strong)] shadow-[0_8px_20px_rgba(243,198,35,0.12)]">
              <span aria-hidden="true">⏰</span>
              Ofertas por tempo limitado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

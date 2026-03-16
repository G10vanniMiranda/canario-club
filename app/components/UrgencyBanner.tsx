export function UrgencyBanner() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6 sm:pb-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#123f31_0%,#0f5741_42%,#0f7e59_100%)] px-6 py-10 shadow-[0_24px_70px_rgba(10,72,55,0.18)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-4%] top-[-10%] h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(255,226,122,0.3)_0%,_rgba(255,226,122,0)_70%)] blur-3xl" />
          <div className="absolute right-[-6%] bottom-[-20%] h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(37,99,184,0.22)_0%,_rgba(37,99,184,0)_70%)] blur-3xl" />
          <div className="absolute right-8 top-8 rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/78">
            Estoque limitado
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-[3rem]">
            Garanta seus itens antes dos jogos decisivos
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
            Nossos produtos promocionais tem disponibilidade limitada.
            Aproveite agora para garantir sua torcida completa antes da alta
            demanda.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffe27a_0%,var(--accent-yellow)_55%,#ecb400_100%)] px-7 py-4 text-base font-semibold text-[color:var(--ink-strong)] shadow-[0_18px_36px_rgba(243,198,35,0.28)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_46px_rgba(243,198,35,0.36)]"
          >
            Comprar agora
          </a>
        </div>
      </div>
    </section>
  );
}

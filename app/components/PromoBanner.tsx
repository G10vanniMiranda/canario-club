export function PromoBanner() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6 sm:pb-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[38px] bg-[linear-gradient(135deg,#0f4a37_0%,#135b43_38%,#11976b_72%,#1ab27d_100%)] px-6 py-12 shadow-[0_28px_80px_rgba(10,72,55,0.2)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-4%] top-[-10%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(255,226,122,0.35)_0%,_rgba(255,226,122,0)_70%)] blur-3xl" />
          <div className="absolute right-[-8%] bottom-[-16%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(37,99,184,0.26)_0%,_rgba(37,99,184,0)_70%)] blur-3xl" />
          <div className="absolute left-[18%] top-[18%] h-32 w-32 rounded-full border border-white/10" />
          <div className="absolute right-[12%] top-[12%] h-24 w-24 rounded-full border border-white/10" />
          <div className="absolute bottom-[14%] left-[10%] rounded-full bg-[rgba(255,255,255,0.1)] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/80">
            Campanha limitada
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/14 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/84 backdrop-blur-sm">
            Ofertas especiais da torcida
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-[3.4rem]">
            Prepare sua torcida para os jogos do Brasil
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
            Aproveite nossas ofertas especiais em camisas, acessorios e kits
            tematicos para viver cada partida com muito mais emocao.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffe27a_0%,var(--accent-yellow)_55%,#ecb400_100%)] px-7 py-4 text-base font-semibold text-[color:var(--ink-strong)] shadow-[0_18px_36px_rgba(243,198,35,0.28)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_46px_rgba(243,198,35,0.36)]"
          >
            Garantir minha oferta
          </a>
        </div>
      </div>
    </section>
  );
}

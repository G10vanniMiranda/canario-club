const kitBenefits = [
  "Combinacao pronta",
  "Melhor custo-beneficio",
  "Ideal para presentear",
  "Perfeito para assistir aos jogos em grupo",
];

export function KitsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6 sm:pb-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[38px] border border-[rgba(217,232,223,0.82)] bg-[linear-gradient(135deg,#ffffff_0%,#f7fbf8_52%,#eef8f1_100%)] px-6 py-10 shadow-[0_24px_70px_rgba(10,72,55,0.06)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-5%] top-[-12%] h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(243,198,35,0.2)_0%,_rgba(243,198,35,0)_72%)] blur-3xl" />
          <div className="absolute right-[-8%] bottom-[-18%] h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(17,151,107,0.14)_0%,_rgba(17,151,107,0)_72%)] blur-3xl" />
        </div>

        <div className="relative max-w-3xl">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-[color:var(--ink-strong)] sm:text-4xl">
            Kits prontos para torcer
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--ink-soft)] sm:text-lg">
            Mais praticidade, mais estilo e mais economia para voce viver a Copa
            do jeito certo.
          </p>
        </div>

        <div className="relative mt-8 grid items-center gap-8 rounded-[34px] border border-[rgba(217,232,223,0.8)] bg-white/82 p-5 shadow-[0_20px_50px_rgba(10,72,55,0.06)] lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-10 lg:p-6">
          <div className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(160deg,#0f4a37_0%,#135b43_48%,#11976b_100%)] p-6 shadow-[0_24px_48px_rgba(10,72,55,0.18)]">
            <div className="absolute left-5 top-5 rounded-full bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/84">
              Kit principal
            </div>
            <div className="absolute right-5 top-5 h-18 w-18 rounded-full border border-white/10" />
            <div className="relative flex min-h-[320px] items-end justify-center gap-4 pt-12">
              <div className="w-16 rounded-[24px] bg-[linear-gradient(180deg,#ffd84f_0%,#f3c623_100%)] px-2 pb-5 pt-4 shadow-[0_16px_30px_rgba(7,32,24,0.22)]">
                <div className="h-12 rounded-[14px] bg-[#0f5741]" />
              </div>
              <div className="w-24 rounded-[28px] bg-[linear-gradient(180deg,#1b6e52_0%,#11976b_100%)] px-3 pb-6 pt-5 shadow-[0_22px_42px_rgba(7,32,24,0.28)]">
                <div className="rounded-[20px] bg-[#ffd84f] px-3 py-10 text-center">
                  <span className="text-4xl font-black tracking-[-0.08em] text-[#0f5741]">
                    10
                  </span>
                </div>
              </div>
              <div className="w-16 rounded-[24px] bg-white/84 px-2 pb-5 pt-4 shadow-[0_16px_30px_rgba(7,32,24,0.18)]">
                <div className="h-12 rounded-[14px] bg-[#2563b8]" />
              </div>
            </div>
            <div className="mt-5 rounded-[24px] bg-white/10 px-4 py-4 text-white backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/72">
                Pronto para o jogo
              </p>
              <p className="mt-2 text-lg font-bold">
                Camisa, bandeira e acessorios no mesmo pacote
              </p>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full border border-[color:var(--line-soft)] bg-[color:var(--surface-soft)] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--accent-green)]">
              Selecao especial
            </span>

            <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] text-[color:var(--ink-strong)] sm:text-[2.35rem]">
              Kit Torcedor Brasil Completo
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--ink-soft)] sm:text-lg">
              Camisa, bandeira e acessorios para transformar qualquer jogo em um
              momento inesquecivel.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {kitBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-[20px] border border-[rgba(217,232,223,0.8)] bg-[rgba(255,255,255,0.78)] px-4 py-3 shadow-[0_10px_24px_rgba(10,72,55,0.04)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface-soft)] text-sm font-bold text-[color:var(--accent-green)]">
                    +
                  </span>
                  <span className="text-sm font-semibold text-[color:var(--ink-strong)]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffe27a_0%,var(--accent-yellow)_55%,#ecb400_100%)] px-6 py-4 text-base font-semibold text-[color:var(--ink-strong)] shadow-[0_16px_34px_rgba(243,198,35,0.26)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(243,198,35,0.34)]"
            >
              Ver kit completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

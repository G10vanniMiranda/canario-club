const trustItems = [
  { icon: "S", text: "Compra segura" },
  { icon: "E", text: "Envio para todo o Brasil" },
  { icon: "O", text: "Ofertas por tempo limitado" },
];

const accessoryCards = [
  { title: "Bandeira oficial", tone: "bg-[#f6fbf7]" },
  { title: "Oculos de torcida", tone: "bg-[#fff9e7]" },
  { title: "Kit premium", tone: "bg-[#eef5ff]" },
];

export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-18 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8 lg:pt-16">
      <div className="relative overflow-hidden rounded-[40px] border border-[rgba(217,232,223,0.8)] bg-[linear-gradient(135deg,#f9fcfa_0%,#ffffff_45%,#f4fbf6_100%)] px-6 py-10 shadow-[0_30px_100px_rgba(10,72,55,0.08)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-[-8%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(243,198,35,0.24)_0%,_rgba(243,198,35,0)_70%)] blur-3xl" />
          <div className="absolute right-[-10%] top-[4%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(37,99,184,0.16)_0%,_rgba(37,99,184,0)_72%)] blur-3xl" />
          <div className="absolute bottom-[-14%] left-[28%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(17,151,107,0.16)_0%,_rgba(17,151,107,0)_74%)] blur-3xl" />
          <div className="absolute inset-y-0 right-[38%] hidden w-px bg-gradient-to-b from-transparent via-[rgba(217,232,223,0.85)] to-transparent lg:block" />
        </div>

        <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-10">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[color:var(--line-soft)] bg-[rgba(255,255,255,0.82)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.26em] text-[color:var(--accent-green)] shadow-[0_12px_24px_rgba(17,151,107,0.08)]">
              Colecao especial para torcer pelo Brasil
            </span>

            <h1 className="mt-7 max-w-[11ch] text-4xl font-black leading-[0.92] tracking-[-0.06em] text-[color:var(--ink-strong)] sm:text-5xl lg:text-[4.8rem]">
              Vista a paixao pelo Brasil nesta Copa
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--ink-soft)] sm:text-[1.18rem] sm:leading-9">
              Camisas, acessorios e kits de torcida para voce viver cada jogo com
              emocao, estilo e espirito de campeao.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:max-w-xl sm:flex-row">
              <a
                href="#"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent-green),#0f8b66_100%)] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_40px_rgba(17,151,107,0.28)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105"
              >
                Comprar camisas
              </a>
              <a
                href="#"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-white/90 px-7 py-4 text-base font-semibold text-[color:var(--ink-strong)] shadow-[0_10px_24px_rgba(10,72,55,0.06)] transition duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)]"
              >
                Ver acessorios
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3.5">
              {trustItems.map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2.5 rounded-full border border-[color:var(--line-soft)] bg-white/88 px-4 py-2.5 text-sm font-medium text-[color:var(--ink-strong)] shadow-[0_8px_20px_rgba(10,72,55,0.05)]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--surface-soft)] text-xs font-bold text-[color:var(--accent-green)]">
                    {item.icon}
                  </span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute left-1/2 top-6 h-[82%] w-[72%] -translate-x-1/2 rounded-[36px] bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(255,255,255,0.04))] blur-md" />

            <div className="relative rounded-[34px] border border-[rgba(217,232,223,0.9)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,251,246,0.95))] p-5 shadow-[0_30px_60px_rgba(10,72,55,0.12)] sm:p-6">
              <div className="absolute -left-5 top-8 rounded-full border border-[rgba(217,232,223,0.8)] bg-white/92 px-4 py-2 text-sm font-semibold text-[color:var(--ink-strong)] shadow-[0_14px_30px_rgba(10,72,55,0.08)]">
                Torcida pronta para o jogo
              </div>

              <div className="absolute -right-4 bottom-8 rounded-[22px] border border-[rgba(217,232,223,0.8)] bg-[rgba(255,255,255,0.94)] px-4 py-3 shadow-[0_16px_30px_rgba(10,72,55,0.10)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-green)]">
                  Oferta da semana
                </p>
                <p className="mt-1 text-lg font-black text-[color:var(--ink-strong)]">
                  Ate 30% off
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-[118px_minmax(0,1fr)]">
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-1">
                  {accessoryCards.map((item) => (
                    <div
                      key={item.title}
                      className={`rounded-[24px] border border-[rgba(217,232,223,0.8)] ${item.tone} p-3 shadow-[0_14px_24px_rgba(10,72,55,0.05)]`}
                    >
                      <div className="rounded-[18px] bg-white/80 p-3">
                        <div className="h-10 rounded-[14px] bg-[linear-gradient(135deg,#1d5a44_0%,#11976b_100%)] opacity-95" />
                      </div>
                      <p className="mt-3 text-xs font-semibold leading-5 text-[color:var(--ink-strong)]">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative overflow-hidden rounded-[30px] border border-[rgba(217,232,223,0.9)] bg-[linear-gradient(160deg,#0e3b2d_0%,#135b43_48%,#11976b_100%)] px-6 pb-6 pt-7 shadow-[0_28px_46px_rgba(10,72,55,0.22)]">
                  <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,226,122,0.34),rgba(255,226,122,0)_70%)]" />
                  <div className="absolute -right-10 top-16 h-40 w-40 rounded-full border border-[rgba(255,255,255,0.12)]" />
                  <div className="absolute -left-10 bottom-8 h-28 w-28 rounded-full border border-[rgba(255,255,255,0.10)]" />

                  <div className="relative">
                    <div className="mx-auto flex w-full max-w-[260px] justify-center">
                      <div className="relative w-full rounded-[30px] bg-[linear-gradient(180deg,#ffd84f_0%,#f3c623_100%)] px-6 pb-7 pt-8 shadow-[0_26px_50px_rgba(7,32,24,0.24)]">
                        <div className="absolute left-1/2 top-0 h-10 w-24 -translate-x-1/2 rounded-b-[18px] bg-[#0f5741]" />
                        <div className="absolute left-0 top-10 h-16 w-10 rounded-r-[18px] bg-[#f3c623]" />
                        <div className="absolute right-0 top-10 h-16 w-10 rounded-l-[18px] bg-[#f3c623]" />
                        <div className="rounded-[22px] border border-[rgba(16,53,41,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))] px-5 py-12 text-center">
                          <span className="text-[4rem] font-black leading-none tracking-[-0.08em] text-[#0f5741]">
                            10
                          </span>
                          <p className="mt-3 text-sm font-bold uppercase tracking-[0.3em] text-[#0f5741]">
                            Brasil
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3 rounded-[22px] bg-white/10 px-4 py-3 text-white backdrop-blur-sm">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/72">
                          Destaque da colecao
                        </p>
                        <p className="mt-1 text-lg font-bold">Camisa oficial 2026</p>
                      </div>
                      <span className="rounded-full bg-white/16 px-3 py-2 text-sm font-semibold">
                        Pronta entrega
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

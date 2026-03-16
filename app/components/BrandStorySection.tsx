export function BrandStorySection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6 sm:pb-24 lg:px-8">
      <div className="rounded-[38px] border border-[rgba(217,232,223,0.78)] bg-[linear-gradient(180deg,#fcfdfc_0%,#f6f9f7_100%)] px-6 py-10 shadow-[0_18px_60px_rgba(10,72,55,0.04)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:gap-10">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[color:var(--line-soft)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--accent-green)]">
              Essencia da marca
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-[color:var(--ink-strong)] sm:text-4xl">
              A energia da torcida comeca no que voce veste
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--ink-soft)] sm:text-lg">
              Nossa selecao de produtos foi pensada para quem quer viver a
              emocao da Copa com mais identidade, estilo e intensidade. Aqui
              voce encontra itens para assistir aos jogos, reunir os amigos e
              torcer pelo Brasil com personalidade.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-white px-6 py-4 text-base font-semibold text-[color:var(--ink-strong)] shadow-[0_12px_28px_rgba(10,72,55,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent-green)] hover:text-[color:var(--accent-green)]"
            >
              Explorar colecao
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,#ffffff_0%,#edf5ef_100%)] p-5 shadow-[0_22px_46px_rgba(10,72,55,0.08)]">
              <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-[rgba(243,198,35,0.18)]" />
              <div className="absolute left-5 top-8 h-24 w-24 rounded-full border border-[rgba(17,151,107,0.12)]" />

              <div className="relative rounded-[28px] bg-[linear-gradient(160deg,#0f4a37_0%,#135b43_48%,#11976b_100%)] px-6 pb-6 pt-7 text-white">
                <div className="mx-auto flex w-full max-w-[180px] justify-center">
                  <div className="w-full rounded-[26px] bg-[linear-gradient(180deg,#ffd84f_0%,#f3c623_100%)] px-4 pb-5 pt-6 shadow-[0_18px_32px_rgba(7,32,24,0.22)]">
                    <div className="mx-auto h-8 w-[4.5rem] rounded-b-[16px] bg-[#0f5741]" />
                    <div className="mt-3 rounded-[20px] bg-white/16 px-4 py-8 text-center">
                      <span className="text-5xl font-black tracking-[-0.08em] text-[#0f5741]">
                        10
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-[22px] bg-white/10 px-4 py-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/72">
                    Estilo para o dia do jogo
                  </p>
                  <p className="mt-2 text-base leading-7 text-white/88">
                    Pecas pensadas para criar presenca, memoria e clima de
                    torcida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

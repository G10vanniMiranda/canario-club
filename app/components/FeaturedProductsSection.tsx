const featuredProducts = [
  {
    name: "Camisa Brasil Torcedor",
    description:
      "Leve, confortavel e perfeita para assistir aos jogos com orgulho.",
    oldPrice: "R$ 199,90",
    price: "R$ 149,90",
    cta: "Comprar agora",
    badge: "Mais vendido",
    art: "jersey",
  },
  {
    name: "Bandeira do Brasil",
    description:
      "Ideal para decorar, levar para a torcida ou entrar no clima do jogo.",
    oldPrice: "R$ 59,90",
    price: "R$ 39,90",
    cta: "Ver produto",
    badge: "Oferta",
    art: "flag",
  },
  {
    name: "Oculos Verde e Amarelo",
    description:
      "Um acessorio divertido e marcante para completar seu visual de torcida.",
    oldPrice: "R$ 39,90",
    price: "R$ 24,90",
    cta: "Ver produto",
    badge: "Novo",
    art: "glasses",
  },
  {
    name: "Peruca Brasil",
    description:
      "Para quem quer chegar nos jogos com energia e chamar atencao na comemoracao.",
    oldPrice: "R$ 49,90",
    price: "R$ 29,90",
    cta: "Comprar agora",
    badge: "Oferta",
    art: "wig",
  },
  {
    name: "Chapeu Torcedor Brasil",
    description:
      "Um classico da torcida para compor o look dos dias de jogo.",
    oldPrice: "R$ 69,90",
    price: "R$ 44,90",
    cta: "Ver produto",
    badge: "",
    art: "hat",
  },
  {
    name: "Kit Torcedor Brasil",
    description:
      "Tudo que voce precisa para assistir aos jogos no clima da selecao.",
    oldPrice: "R$ 249,90",
    price: "R$ 179,90",
    cta: "Ver kit",
    badge: "Combo",
    art: "kit",
  },
];

function ProductArt({ type }: { type: string }) {
  if (type === "jersey") {
    return (
      <div className="relative h-56 overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#0f4a37_0%,#135b43_44%,#11976b_100%)] p-6">
        <div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-white/14" />
        <div className="absolute -left-6 bottom-4 h-16 w-16 rounded-full border border-white/10" />
        <div className="mx-auto mt-2 w-full max-w-[170px] rounded-[28px] bg-[linear-gradient(180deg,#ffd84f_0%,#f3c623_100%)] px-4 pb-5 pt-6 shadow-[0_22px_42px_rgba(7,32,24,0.28)]">
          <div className="mx-auto h-8 w-[4.5rem] rounded-b-[16px] bg-[#0f5741]" />
          <div className="mt-3 rounded-[20px] bg-white/16 px-4 py-9 text-center">
            <span className="text-5xl font-black leading-none tracking-[-0.08em] text-[#0f5741]">
              10
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "flag") {
    return (
      <div className="relative h-56 overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#f7fbff_0%,#dbeeff_100%)] p-6">
        <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-white/40" />
        <div className="absolute left-7 top-8 h-36 w-2 rounded-full bg-[#0f5741]" />
        <div className="ml-4 mt-5 h-24 w-[75%] rounded-[22px] bg-[linear-gradient(180deg,#1b6e52_0%,#11976b_100%)] p-5 shadow-[0_18px_34px_rgba(28,73,128,0.18)]">
          <div className="flex h-full items-center justify-center rounded-[18px] bg-[#ffd84f]">
            <div className="h-10 w-10 rotate-45 rounded-[10px] bg-[#2563b8]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "glasses") {
    return (
      <div className="relative h-56 overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#fff8d7_0%,#ffe27a_100%)] p-6">
        <div className="absolute right-5 top-5 h-14 w-14 rounded-full bg-white/24" />
        <div className="absolute left-6 top-10 h-20 w-20 rounded-full border border-[#0f5741]/10" />
        <div className="flex h-full items-center justify-center">
          <div className="rounded-[30px] bg-white/82 px-6 py-8 shadow-[0_18px_34px_rgba(123,89,0,0.12)]">
            <div className="flex items-center gap-3">
              <span className="h-14 w-14 rounded-full border-[7px] border-[#0f5741]" />
              <span className="h-2 w-8 rounded-full bg-[#0f5741]" />
              <span className="h-14 w-14 rounded-full border-[7px] border-[#0f5741]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "wig") {
    return (
      <div className="relative h-56 overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#f8fbf8_0%,#eef8f1_100%)] p-6">
        <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-[#ffd84f]/35" />
        <div className="flex h-full items-center justify-center">
          <div className="relative">
            <div className="absolute -left-8 top-3 h-16 w-16 rounded-full bg-[#11976b]" />
            <div className="absolute right-[-2rem] top-3 h-16 w-16 rounded-full bg-[#ffd84f]" />
            <div className="absolute left-2 top-0 h-16 w-16 rounded-full bg-[#2563b8]" />
            <div className="relative mt-12 h-24 w-24 rounded-full bg-[#f6d2b2]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "hat") {
    return (
      <div className="relative h-56 overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#eef6ff_0%,#dcecff_100%)] p-6">
        <div className="absolute right-6 top-6 h-14 w-14 rounded-full bg-white/30" />
        <div className="flex h-full items-center justify-center">
          <div className="w-full max-w-[190px]">
            <div className="mx-auto h-18 w-28 rounded-t-[999px] bg-[linear-gradient(180deg,#1b6e52_0%,#11976b_100%)]" />
            <div className="mt-[-0.3rem] h-6 rounded-full bg-[#ffd84f] shadow-[0_12px_24px_rgba(28,73,128,0.14)]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#0f4a37_0%,#135b43_44%,#11976b_100%)] p-6">
      <div className="absolute left-5 top-5 h-16 w-16 rounded-full border border-white/10" />
      <div className="absolute right-5 top-5 rounded-full bg-[#ffd84f] px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0f5741]">
        Kit
      </div>
      <div className="flex h-full items-end justify-center gap-4">
        <div className="w-14 rounded-[22px] bg-[linear-gradient(180deg,#ffd84f_0%,#f3c623_100%)] px-2 pb-4 pt-3 shadow-[0_16px_30px_rgba(7,32,24,0.22)]">
          <div className="h-12 rounded-[14px] bg-[#0f5741]" />
        </div>
        <div className="w-18 rounded-[24px] bg-[linear-gradient(180deg,#1b6e52_0%,#11976b_100%)] px-3 pb-5 pt-4 shadow-[0_18px_32px_rgba(7,32,24,0.24)]">
          <div className="h-16 rounded-[16px] bg-[#ffd84f]" />
        </div>
        <div className="w-14 rounded-[22px] bg-white/84 px-2 pb-4 pt-3 shadow-[0_16px_30px_rgba(7,32,24,0.16)]">
          <div className="h-12 rounded-[14px] bg-[#2563b8]" />
        </div>
      </div>
    </div>
  );
}

export function FeaturedProductsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6 sm:pb-24 lg:px-8">
      <div className="rounded-[36px] border border-[rgba(217,232,223,0.75)] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf8_100%)] px-6 py-10 shadow-[0_22px_70px_rgba(10,72,55,0.05)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-[color:var(--ink-strong)] sm:text-4xl">
            Produtos em destaque
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--ink-soft)] sm:text-lg">
            Os queridinhos da torcida para viver cada jogo com mais emocao.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <a
              key={product.name}
              href="#"
              className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-[rgba(217,232,223,0.88)] bg-white shadow-[0_18px_40px_rgba(10,72,55,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_54px_rgba(10,72,55,0.1)]"
            >
              <div className="relative p-4 pb-0">
                {product.badge ? (
                  <span className="absolute left-7 top-7 z-10 rounded-full bg-[rgba(255,255,255,0.92)] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent-green)] shadow-[0_12px_24px_rgba(10,72,55,0.08)]">
                    {product.badge}
                  </span>
                ) : null}
                <ProductArt type={product.art} />
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                <h3 className="text-xl font-black tracking-[-0.04em] text-[color:var(--ink-strong)]">
                  {product.name}
                </h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-[color:var(--ink-soft)]">
                  {product.description}
                </p>

                <div className="mt-5 flex items-end gap-3">
                  <span className="text-sm font-medium text-[color:var(--ink-soft)] line-through">
                    {product.oldPrice}
                  </span>
                  <span className="text-2xl font-black tracking-[-0.05em] text-[color:var(--accent-green)]">
                    {product.price}
                  </span>
                </div>

                <span className="mt-5 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffe27a_0%,var(--accent-yellow)_55%,#ecb400_100%)] px-5 py-3 text-sm font-semibold text-[color:var(--ink-strong)] shadow-[0_14px_30px_rgba(243,198,35,0.22)] transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_18px_36px_rgba(243,198,35,0.3)]">
                  {product.cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

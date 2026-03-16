const categories = [
  {
    title: "Camisas da Selecao",
    description:
      "Modelos para torcer com conforto, presenca e estilo em qualquer jogo.",
    cta: "Ver camisas",
    tone:
      "bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf7_100%)] border-[rgba(217,232,223,0.9)]",
    art: "jersey",
  },
  {
    title: "Acessorios de Torcida",
    description:
      "Oculos, bandeiras, perucas, chapeus e muito mais para completar seu visual.",
    cta: "Ver acessorios",
    tone:
      "bg-[linear-gradient(180deg,#fffdf6_0%,#fff6d8_100%)] border-[rgba(243,198,35,0.28)]",
    art: "accessories",
  },
  {
    title: "Kits Torcedor",
    description:
      "Combinacoes prontas para quem quer economizar e receber tudo em um so pedido.",
    cta: "Ver kits",
    tone:
      "bg-[linear-gradient(180deg,#f6fbff_0%,#edf6ff_100%)] border-[rgba(37,99,184,0.18)]",
    art: "kit",
  },
  {
    title: "Ofertas Especiais",
    description:
      "Produtos selecionados com condicoes promocionais por tempo limitado.",
    cta: "Ver ofertas",
    tone:
      "bg-[linear-gradient(180deg,#f9fcfa_0%,#eef8f1_100%)] border-[rgba(17,151,107,0.2)]",
    art: "offer",
  },
];

function CategoryArt({ type }: { type: string }) {
  if (type === "jersey") {
    return (
      <div className="relative h-48 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#0f4a37_0%,#11976b_62%,#30b982_100%)] px-6 pt-7">
        <div className="absolute right-4 top-4 h-20 w-20 rounded-full border border-white/14" />
        <div className="absolute -left-5 bottom-4 h-16 w-16 rounded-full border border-white/12" />
        <div className="mx-auto w-full max-w-[170px] rounded-[26px] bg-[linear-gradient(180deg,#ffd84f_0%,#f3c623_100%)] px-4 pb-5 pt-6 shadow-[0_18px_36px_rgba(7,32,24,0.25)]">
          <div className="mx-auto h-8 w-[4.5rem] rounded-b-[16px] bg-[#0f5741]" />
          <div className="mt-3 rounded-[20px] bg-white/16 px-4 py-8 text-center">
            <span className="text-5xl font-black leading-none tracking-[-0.08em] text-[#0f5741]">
              10
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "accessories") {
    return (
      <div className="relative h-48 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#fff4c0_0%,#ffe27a_48%,#f3c623_100%)] p-5">
        <div className="absolute right-5 top-5 h-14 w-14 rounded-full bg-white/24" />
        <div className="absolute left-5 top-9 h-20 w-20 rounded-full border border-[#0f5741]/12" />
        <div className="relative flex h-full items-end justify-between gap-3">
          <div className="rounded-[24px] bg-white/76 px-4 py-5 shadow-[0_12px_24px_rgba(123,89,0,0.1)]">
            <div className="flex gap-2">
              <span className="h-10 w-10 rounded-full border-[5px] border-[#0f5741]" />
              <span className="h-10 w-10 rounded-full border-[5px] border-[#0f5741]" />
            </div>
          </div>
          <div className="w-20 rounded-t-[28px] rounded-b-[18px] bg-[linear-gradient(180deg,#1b6e52_0%,#0f5741_100%)] px-3 pb-5 pt-4 shadow-[0_12px_24px_rgba(16,53,41,0.16)]">
            <div className="h-8 rounded-full bg-[#ffd84f]" />
          </div>
          <div className="rounded-[24px] bg-[#0f5741] px-4 py-5 text-white shadow-[0_12px_24px_rgba(16,53,41,0.16)]">
            <div className="h-10 w-14 rounded-[14px] bg-[linear-gradient(180deg,#30b982_0%,#11976b_100%)]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "kit") {
    return (
      <div className="relative h-48 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#e9f4ff_0%,#cfe6ff_52%,#9dc6ff_100%)] p-5">
        <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-white/28" />
        <div className="relative flex h-full items-center justify-center">
          <div className="relative flex w-full max-w-[220px] items-end justify-center gap-4">
            <div className="w-16 rounded-[22px] bg-[linear-gradient(180deg,#ffd84f_0%,#f3c623_100%)] px-2 pb-5 pt-4 shadow-[0_14px_28px_rgba(28,73,128,0.18)]">
              <div className="h-12 rounded-[16px] bg-[#0f5741]" />
            </div>
            <div className="w-20 rounded-[24px] bg-[linear-gradient(180deg,#1b6e52_0%,#11976b_100%)] px-3 pb-6 pt-5 shadow-[0_16px_30px_rgba(28,73,128,0.2)]">
              <div className="h-16 rounded-[18px] bg-[#ffd84f]" />
            </div>
            <div className="w-16 rounded-[22px] bg-white/82 px-2 pb-5 pt-4 shadow-[0_14px_28px_rgba(28,73,128,0.14)]">
              <div className="h-12 rounded-[16px] bg-[#2563b8]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-48 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#0f4a37_0%,#135b43_48%,#11976b_100%)] p-5">
      <div className="absolute left-5 top-5 h-16 w-16 rounded-full border border-white/12" />
      <div className="absolute right-5 top-5 rounded-full bg-[#ffd84f] px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0f5741]">
        Sale
      </div>
      <div className="relative flex h-full items-end">
        <div className="w-full rounded-[24px] bg-white/12 p-4 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/72">
            Semana do torcedor
          </p>
          <p className="mt-2 text-3xl font-black text-white">Ate 30% OFF</p>
          <div className="mt-4 h-2 rounded-full bg-white/16">
            <div className="h-2 w-2/3 rounded-full bg-[#ffd84f]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CategoriesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6 sm:pb-24 lg:px-8">
      <div className="rounded-[36px] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbf8_100%)] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-[color:var(--ink-strong)] sm:text-4xl">
            Escolha como voce vai torcer
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--ink-soft)] sm:text-lg">
            Encontre os produtos ideais para entrar no clima dos jogos e mostrar
            sua paixao pelo Brasil.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className={`group overflow-hidden rounded-[30px] border ${category.tone} p-4 shadow-[0_18px_40px_rgba(10,72,55,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(10,72,55,0.1)]`}
            >
              <CategoryArt type={category.art} />

              <div className="px-1 pb-2 pt-5">
                <h3 className="text-xl font-black tracking-[-0.04em] text-[color:var(--ink-strong)]">
                  {category.title}
                </h3>
                <p className="mt-3 min-h-[5rem] text-sm leading-6 text-[color:var(--ink-soft)]">
                  {category.description}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-[color:var(--ink-strong)] shadow-[0_10px_24px_rgba(10,72,55,0.06)] transition group-hover:bg-[color:var(--ink-strong)] group-hover:text-white"
                >
                  {category.cta}
                  <span aria-hidden="true">+</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

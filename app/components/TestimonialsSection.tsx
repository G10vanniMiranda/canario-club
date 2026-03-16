const testimonials = [
  {
    quote:
      "Chegou certinho e a qualidade me surpreendeu. Ja estou preparado para os jogos do Brasil.",
    author: "Carlos, SP",
  },
  {
    quote:
      "Comprei os acessorios e ficou muito bom para assistir aos jogos com meus amigos.",
    author: "Mariana, RJ",
  },
  {
    quote:
      "Gostei muito da camisa, veste bem e o visual e bonito demais.",
    author: "Felipe, MG",
  },
  {
    quote:
      "O kit valeu a pena, veio tudo dentro do esperado e chegou direitinho.",
    author: "Juliana, PR",
  },
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6 sm:pb-24 lg:px-8">
      <div className="rounded-[36px] border border-[rgba(217,232,223,0.8)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbf8_100%)] px-6 py-10 shadow-[0_18px_60px_rgba(10,72,55,0.05)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-[color:var(--ink-strong)] sm:text-4xl">
            Quem compra, aprova
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--ink-soft)] sm:text-lg">
            Veja o que os clientes estao dizendo sobre nossos produtos.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <article
              key={item.author}
              className="rounded-[28px] border border-[rgba(217,232,223,0.82)] bg-white px-5 py-6 shadow-[0_14px_34px_rgba(10,72,55,0.04)]"
            >
              <div className="text-base tracking-[0.18em] text-[color:var(--accent-yellow)]">
                ★★★★★
              </div>
              <p className="mt-4 text-[15px] leading-7 text-[color:var(--ink-strong)]">
                "{item.quote}"
              </p>
              <p className="mt-5 text-sm font-semibold text-[color:var(--ink-soft)]">
                {item.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

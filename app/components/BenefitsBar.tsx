const benefitItems = [
  { emoji: "🚚", text: "Enviamos para todo o Brasil" },
  { emoji: "🔒", text: "Pagamento seguro" },
  { emoji: "🇧🇷", text: "Produtos para torcer com estilo" },
  { emoji: "💳", text: "Parcelamento facilitado" },
];

export function BenefitsBar() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="grid gap-3 rounded-[30px] bg-[linear-gradient(180deg,#f8fbf8_0%,#ffffff_100%)] p-4 shadow-[0_18px_50px_rgba(10,72,55,0.06)] sm:grid-cols-2 sm:p-5 lg:grid-cols-4 lg:gap-4 lg:p-6">
        {benefitItems.map((item) => (
          <div
            key={item.text}
            className="group flex items-center gap-3 rounded-[22px] bg-white px-4 py-3.5 shadow-[0_10px_24px_rgba(10,72,55,0.04)] transition duration-300 hover:-translate-y-1 hover:bg-[color:var(--surface-soft)] hover:shadow-[0_18px_36px_rgba(10,72,55,0.10)]"
          >
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface-soft)] text-xl transition duration-300 group-hover:scale-110 group-hover:bg-white"
            >
              {item.emoji}
            </span>
            <p className="text-sm font-semibold leading-6 text-[color:var(--ink-strong)] transition duration-300 group-hover:text-[color:var(--accent-green)]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

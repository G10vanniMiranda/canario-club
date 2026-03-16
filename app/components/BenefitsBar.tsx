const benefitItems = [
  { icon: "truck", text: "Enviamos para todo o Brasil" },
  { icon: "lock", text: "Pagamento seguro" },
  { icon: "badge", text: "Produtos para torcer com estilo" },
  { icon: "card", text: "Parcelamento facilitado" },
];

function BenefitIcon({ type }: { type: string }) {
  if (type === "truck") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7.5h11v8H3z" />
        <path d="M14 10h3.5l2.5 2.5v3H14z" />
        <circle cx="7.5" cy="18" r="1.5" />
        <circle cx="17.5" cy="18" r="1.5" />
      </svg>
    );
  }

  if (type === "lock") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V8a4 4 0 1 1 8 0v2" />
      </svg>
    );
  }

  if (type === "badge") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="10" r="5" />
        <path d="M9 14.5V20l3-2 3 2v-5.5" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="18" height="12" rx="2.5" />
      <path d="M3 10.5h18" />
      <path d="M7 15h3" />
    </svg>
  );
}

export function BenefitsBar() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="rounded-[32px] border border-[rgba(217,232,223,0.95)] bg-[linear-gradient(180deg,#ffffff_0%,#f5faf6_100%)] p-3 shadow-[0_20px_60px_rgba(10,72,55,0.06)] sm:p-4 lg:p-5">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {benefitItems.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 rounded-[22px] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(10,72,55,0.04)]"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface-soft)] text-[color:var(--accent-green)]"
              >
                <BenefitIcon type={item.icon} />
              </span>
              <p className="text-sm font-semibold leading-5 text-[color:var(--ink-strong)] lg:text-[0.95rem]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

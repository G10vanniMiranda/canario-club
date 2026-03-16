"use client";

import { useState } from "react";

const menuItems = ["Inicio", "Camisas", "Acessorios", "Kits", "Ofertas"];

function SearchIcon() {
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
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  );
}

function CartIcon() {
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
      <path d="M3.5 5h2l2.1 9.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H7" />
      <circle cx="10" cy="19" r="1.4" />
      <circle cx="17.5" cy="19" r="1.4" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-[7px] rounded-full bg-current transition ${
          open ? "translate-y-0 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 block h-0.5 w-5 translate-y-[6px] rounded-full bg-current transition ${
          open ? "translate-y-0 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(217,232,223,0.7)] bg-[rgba(255,255,255,0.8)] backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 rounded-[30px] border border-[rgba(217,232,223,0.85)] bg-[rgba(255,255,255,0.94)] px-4 py-3 shadow-[0_18px_44px_rgba(10,72,55,0.08)] sm:px-5 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:rounded-full lg:px-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffe27a_0%,var(--accent-yellow)_45%,#f0b800_100%)] text-lg font-black text-[color:var(--ink-strong)] shadow-[0_12px_30px_rgba(243,198,35,0.28)] sm:h-14 sm:w-14 sm:text-xl">
              CC
            </div>
            <div className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.34em] text-[color:var(--accent-green)] sm:text-xs">
                Campanha 2026
              </span>
              <span className="block truncate text-xl font-bold tracking-tight text-[color:var(--ink-strong)] sm:text-[1.75rem]">
                Canarinho Club
              </span>
            </div>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--surface-soft)] text-[color:var(--ink-strong)] transition hover:bg-[color:var(--ink-strong)] hover:text-white lg:hidden"
          >
            <MenuIcon open={isOpen} />
          </button>

          <nav aria-label="Menu principal" className="hidden lg:block">
            <ul className="flex items-center justify-center gap-1 text-sm font-semibold text-[color:var(--ink-strong)] xl:gap-2">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block rounded-full px-4 py-3 transition-colors hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--accent-green)]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              aria-label="Buscar produtos"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-white text-[color:var(--ink-strong)] transition hover:border-[color:var(--accent-green)] hover:text-[color:var(--accent-green)]"
            >
              <SearchIcon />
            </button>

            <button
              type="button"
              aria-label="Abrir carrinho"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-white text-[color:var(--ink-strong)] transition hover:border-[color:var(--accent-green)] hover:text-[color:var(--accent-green)]"
            >
              <CartIcon />
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[color:var(--accent-green)] px-1 text-[10px] font-bold text-white">
                0
              </span>
            </button>

            <a
              href="#"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffe27a_0%,var(--accent-yellow)_55%,#ecb400_100%)] px-5 py-3 text-sm font-semibold text-[color:var(--ink-strong)] shadow-[0_16px_34px_rgba(243,198,35,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(243,198,35,0.38)]"
            >
              Ver ofertas
            </a>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out lg:hidden ${
            isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-[28px] border border-[rgba(217,232,223,0.9)] bg-[rgba(255,255,255,0.96)] px-4 py-4 shadow-[0_20px_50px_rgba(10,72,55,0.08)]">
              <nav aria-label="Menu mobile">
                <ul className="flex flex-col gap-1">
                  {menuItems.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-[color:var(--ink-strong)] transition-colors hover:bg-[color:var(--surface-soft)]"
                      >
                        {item}
                        <span className="text-[color:var(--accent-green)]">+</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Buscar produtos"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-white text-[color:var(--ink-strong)]"
                >
                  <SearchIcon />
                </button>
                <button
                  type="button"
                  aria-label="Abrir carrinho"
                  className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-white text-[color:var(--ink-strong)]"
                >
                  <CartIcon />
                  <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[color:var(--accent-green)] px-1 text-[10px] font-bold text-white">
                    0
                  </span>
                </button>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex min-w-0 flex-1 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffe27a_0%,var(--accent-yellow)_55%,#ecb400_100%)] px-5 py-3.5 text-sm font-semibold text-[color:var(--ink-strong)] shadow-[0_12px_30px_rgba(243,198,35,0.26)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Ver ofertas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

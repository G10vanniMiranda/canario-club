"use client";

import { useState } from "react";

const menuItems = ["Inicio", "Camisas", "Acessorios", "Kits", "Ofertas"];

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
    <header className="sticky top-0 z-50 bg-[rgba(255,255,255,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 rounded-[28px] bg-white px-4 py-3 shadow-[0_16px_50px_rgba(10,72,55,0.07)] sm:px-5 lg:rounded-full lg:px-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent-yellow),#ffdb4d_45%,#5ac28e_100%)] text-lg font-black text-[color:var(--ink-strong)] shadow-[0_12px_30px_rgba(17,151,107,0.22)] sm:h-14 sm:w-14 sm:text-xl">
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

          <div className="hidden items-center gap-3 lg:flex">
            <nav aria-label="Menu principal">
              <ul className="flex items-center gap-1 text-sm font-semibold text-[color:var(--ink-strong)] xl:gap-2">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block rounded-full px-4 py-3 transition-colors hover:bg-[color:var(--surface-soft)]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent-green),#0f8b66_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(17,151,107,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105"
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
            <div className="rounded-[28px] bg-white px-4 py-4 shadow-[0_20px_50px_rgba(10,72,55,0.08)]">
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

              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent-green),#0f8b66_100%)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(17,151,107,0.24)] transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105"
              >
                Ver ofertas
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Voces entregam para todo o Brasil?",
    answer: "Sim, realizamos envios para todo o territorio nacional.",
  },
  {
    question: "Os produtos possuem rastreamento?",
    answer:
      "Sim, apos o envio voce recebe o codigo de rastreio para acompanhar sua entrega.",
  },
  {
    question: "Quais formas de pagamento sao aceitas?",
    answer:
      "Aceitamos cartao de credito, Pix e outras formas disponiveis no checkout.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo pode variar conforme a regiao, e sera informado no momento da compra.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6 sm:pb-24 lg:px-8">
      <div className="rounded-[36px] border border-[rgba(217,232,223,0.76)] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbfa_100%)] px-6 py-10 shadow-[0_18px_60px_rgba(10,72,55,0.04)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-[color:var(--ink-strong)] sm:text-4xl">
            Duvidas frequentes
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-[26px] bg-white px-5 py-2 shadow-[0_10px_30px_rgba(10,72,55,0.04)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-base font-semibold text-[color:var(--ink-strong)] sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface-soft)] text-xl font-medium text-[color:var(--accent-green)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity,padding] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-4 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pr-14 text-sm leading-7 text-[color:var(--ink-soft)] sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

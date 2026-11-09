"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand, nav } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = isHome && !scrolled;
  const text = overHero ? "text-pearl" : "text-ink";

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          overHero
            ? "bg-transparent"
            : "bg-pearl/95 shadow-[0_1px_0_rgba(18,16,14,0.08)] backdrop-blur-md"
        }`}
      >
        <div
          className={`transition-colors duration-500 ${
            overHero
              ? "bg-emerald-deep/80 text-pearl"
              : "bg-emerald-deep text-pearl"
          }`}
        >
          <p className="px-4 py-2 text-center text-[0.65rem] tracking-[0.18em] uppercase opacity-90">
            {brand.announcement}
          </p>
        </div>

        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-3 px-5 py-4 md:gap-4 md:px-10 md:py-5">
          <Link
            href="/"
            className={`font-display text-[1.7rem] tracking-[0.28em] md:text-[2rem] ${text}`}
          >
            {brand.name}
          </Link>

          <nav className={text} aria-label="Primary">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-7 md:gap-x-9">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="nav-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {!isHome ? (
        <div
          className="h-[calc(2.25rem+6.25rem)] md:h-[calc(2.25rem+7.5rem)]"
          aria-hidden
        />
      ) : null}
    </>
  );
}
